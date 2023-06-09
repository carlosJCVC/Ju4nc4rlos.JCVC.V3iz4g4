import { BadRequestException } from "@nestjs/common";

export class FacultyNotFoundException extends BadRequestException {
  constructor(error?: string) {
    super(["La facultad ingresada no existe."], error);
  }
}
