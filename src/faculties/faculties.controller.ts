import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  UseInterceptors,
} from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Image } from 'src/common/types/types';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';

@UseInterceptors(TransformInterceptor)
@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(
    @Body() createFacultyDto: CreateFacultyDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new FileValidationPipe({ fileType: ['image/jpeg']}),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|jpeg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ]
      })
    )
    file: Express.Multer.File) {
    
    const image: Image = {
      originalName: file.originalname,
      fileName: file.filename,
      mineType: file.mimetype,
      path: file.path,
      size: file.size
    };

    createFacultyDto.image = image;

    return this.facultiesService.create(createFacultyDto);
  }

  @Get()
  findAll() {
    return this.facultiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facultiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
    return this.facultiesService.update(id, updateFacultyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facultiesService.remove(id);
  }
}
