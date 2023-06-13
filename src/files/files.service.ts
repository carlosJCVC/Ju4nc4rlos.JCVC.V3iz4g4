import { existsSync } from 'fs';
import { join } from 'path';
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class FilesService {
    getStaticProductImage( imageName: string ) {
        const path = join( __dirname, '../../public/uploads/careers', imageName );

        if ( !existsSync(path) ) 
            throw new BadRequestException(`No Entity found with image ${ imageName }`);

        return path;
    }
}
