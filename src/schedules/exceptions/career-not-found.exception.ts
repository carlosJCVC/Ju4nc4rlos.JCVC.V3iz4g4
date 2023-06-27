import { BadRequestException } from '@nestjs/common';
export class CareerNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super(['Datos incorrectos, verifique los campos.'], error);
  }
}
