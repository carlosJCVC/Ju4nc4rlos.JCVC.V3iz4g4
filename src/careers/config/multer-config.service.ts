import { Injectable } from "@nestjs/common";
import { MulterOptionsFactory } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { ConfigService } from '@nestjs/config';
import { diskStorage } from "multer";
import { extname } from "path";

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
    PATH = 'careers';

    constructor(private configService: ConfigService) {}

    createMulterOptions(): MulterOptions | Promise<MulterOptions> {
        return {
            // dest: this.configService.get<string>('MULTER_DEST'),
            storage: diskStorage({
                destination: `${this.configService.get<string>('MULTER_DEST')}/${this.PATH}`,
                filename: (req, file, cb) => {
                  const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                  const extension = extname(file.originalname);

                  cb(null, `${randomName}${extension}`)
                }
            })
        };
    }
}