import { Injectable } from '@nestjs/common';
import { faculties as data } from './data/faculties';
import { Subject } from './data/subjects';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { FacultiesService } from '../faculties/faculties.service';
import { CareersService } from '../careers/careers.service';
import { SubjectsService } from '../subjects/subjects.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly facultiesService: FacultiesService,
    private readonly careersService: CareersService,
    private readonly subjectsService: SubjectsService
  ) {}

  runSeeder() {
    this.runFacultyAndCareerSeeder();

    return `Faculties was filled successfully!!!`;
  }

  runFacultyAndCareerSeeder() {
    const faculties = data;

    faculties.forEach(async  (facultyData, index) => {
      let faculty = await this.facultiesService.findOneByName(facultyData.name);
      if (!faculty) {
        faculty = await this.facultiesService.createFromSeeder({name: facultyData.name});
      }

      facultyData.careers.forEach(async (careerData) => {
        let career = await this.careersService.findOneByCode(careerData.code);
        if (!career) {
          career = await this.careersService.createFromSeeder(data);
        }
      });
    });
  }

  async runSubjectSeeder() {
    const URL = 'http://websis.umss.edu.bo';
    const careers = await this.careersService.findAll();

    if (careers.length == 0) {
      this.runFacultyAndCareerSeeder();
    }
    
    careers.forEach(async career => {
      const response = await axios.request({
        method: "GET",
        url: `${URL}/umss_carrerasDesc.asp?codSer=UMSS&idCat=45&qual=${career.code}`,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
      });

      const $ = cheerio.load(response.data);

      const subjects = [];
      $(".container table.table").find('tbody>tr').each((index, element) => {
        let code = $(element).find('td').eq(1).text();
        let name = $(element).find('td').eq(2).text();
        let type = $(element).find('td').eq(3).text();
        let elective = $(element).find('td').eq(4).text();
  
        const subjectData = {
          code: code,
          name: name,
          type: type === 'REGULAR'? 'REGULAR' : 'TALLER DE TITULACION',
          isElective: elective === 'S'? true : false
        };

        const result = subjects.find((s) => s.code === code);

        if (!result) {
          subjects.push(subjectData);
        }
      });

      subjects.forEach(async (data) => {
        let subject = await this.subjectsService.findOneByCode(data.code);

        if (!subject) {
          await this.subjectsService.createFromSeeder(data);
        }
      })
    });

    return 'Subjects filled successfully!!!';
  }
}
