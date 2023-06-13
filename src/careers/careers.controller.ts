import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { FilterCareersDto } from './dto/pagination-career.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileValidationPipe } from './pipes/file-validation.pipe';
import { Image } from '../common/types/image.type';

@Controller('careers')
@ApiTags('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(
    @Body() createCareerDto: CreateCareerDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // TODO el formato de las imagenes que se envian aqui no estan siendo utilizadas en el pipe
          // new FileValidationPipe({ fileType: ['image/jpeg']}),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ]
      })
    )
    file: Express.Multer.File) {

    const image: Image = {
      fileName: file.filename,
      mineType: file.mimetype,
      path: file.path
    };

    createCareerDto.image = image;

    return this.careersService.create(createCareerDto);
  }

  @Get()
  findAll(@Query() pagination: FilterCareersDto) {
    return this.careersService.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(id, updateCareerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careersService.remove(id);
  }
}
