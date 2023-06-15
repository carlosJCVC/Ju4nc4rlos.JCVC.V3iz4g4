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
  RequestTimeoutException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { FilterCareersDto } from './dto/pagination-career.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileValidationPipe } from './pipes/file-validation.pipe';
import { Image } from 'src/common/types/types';
import { TransformInterceptor } from 'src/common/interceptors/interceptors';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';


@Controller('careers')
@UseInterceptors(TransformInterceptor)
@ApiTags('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @UseInterceptors(FileInterceptor('image'))
  @Post()
  @Auth(ValidRoles.admin)
  create(
    @Body() createCareerDto: CreateCareerDto,
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

    createCareerDto.image = image;

    return this.careersService.create(createCareerDto);
  }

  @Get()
  @Auth(ValidRoles.student)
  findAll(@Query() pagination: FilterCareersDto) {
    return this.careersService.findAll(pagination);
  }

  @Get(':id')
  @Auth(ValidRoles.student)
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin)
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(id, updateCareerDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(@Param('id') id: string) {
    return this.careersService.remove(id);
  }
}
