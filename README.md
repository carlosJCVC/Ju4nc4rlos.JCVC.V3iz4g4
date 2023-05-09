## Description

[Mobile app](https://github.com/carlosJCVC/student-library-app)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Task

Realizar para la API el CRUD para la tabla estudiantes [students table here](https://github.com/carlosJCVC/student-library-backend/blob/main/db.png)

Tareas a corregir
* Revisar el endpoint nuevamente para el modelo de estudiantes y validar cada campo que sea necesario 
* Evitar manejar cadenas sueltas o valores en duro ejemplo _La url de la cadena de conexion de mongo_
* Para las variable de entorno [click aqui](https://www.npmjs.com/package/dotenv) condiguracion en Nest [click aqui](https://docs.nestjs.com/techniques/configuration#schema-validation)
* Los esquemas(schemas) o entidades(entities) deben tener regals de negocio para los documentos o colecciones en mongodb [Click aqui](https://docs.nestjs.com/techniques/mongodb)

## CRUD

- C - create
- R - read
- U - update
- D - delete

## Endpoints

- C and R : GET - POST {APP_URL}/students
- U and D : {APP_URL}/students/:id
## License

# student-library-backend updated
