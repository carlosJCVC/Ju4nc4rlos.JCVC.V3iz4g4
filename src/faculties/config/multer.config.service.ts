import { Injectable } from "@nestjs/common";
import { MulterOptionsFactory } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { ConfigService } from '@nestjs/config';
import { diskStorage } from "multer";
import { v4 as uuid } from 'uuid'

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
    PATH = 'faculties';

    constructor(private configService: ConfigService) {}

    createMulterOptions(): MulterOptions | Promise<MulterOptions> {
        return {
            // dest: this.configService.get<string>('MULTER_DEST'),
            storage: diskStorage({
                destination: `${this.configService.get<string>('MULTER_DEST')}/${this.PATH}`,
                filename: (req, file, cb) => {
                  const fileParts = file.originalname.split('.');
                  const fileExtension = fileParts[ fileParts.length - 1 ]
                  const fileExtensionMipetype = file.mimetype.split('/')[1];    
                  const extension = (fileExtension) ? fileExtension : fileExtensionMipetype;
                  const fileName = `${ uuid() }.${ extension }`;

                  cb(null, fileName)
                }
            })
        };
    }
}