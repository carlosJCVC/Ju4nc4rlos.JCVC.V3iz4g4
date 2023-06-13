import { PipeTransform, Injectable, ArgumentMetadata, FileValidator, HttpException, HttpStatus } from '@nestjs/common';

export type FileTypeValidatorOptions = {
    fileType: Array<String>;
};

@Injectable()
export class FileValidationPipe extends FileValidator<FileTypeValidatorOptions> {
    isValid(file?: any): boolean | Promise<boolean> {
        const arrayAllowedFiles = ['png', 'jpeg', 'jpg', 'gif'];
        const arrayAllowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

        const extension = file.originalname.slice(((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2);

        if (!arrayAllowedFileTypes.includes(file.mimetype) || !arrayAllowedFiles.includes(extension)) {
            throw new HttpException('The uploaded file is not an image valid format.', HttpStatus.BAD_REQUEST);
        }

        return true;
    }

    buildErrorMessage(file: any): string {
        return "An error occurred while uploading the file."
    }
}