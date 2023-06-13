import { DocumentBuilder } from "@nestjs/swagger";

export default new DocumentBuilder()
    .setTitle('Student App REST API')
    .setDescription('Student App Endpoints')
    .setVersion('1.0')
    .build();
