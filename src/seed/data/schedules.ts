interface Schedule {
    startTime: string;
    endTime: string;
    day: string;
    teacher: string;
    group: string;
    classroom: string;
}

interface Subecjt {
    name: string;
    schedules: Schedule[]
}

export const subject: Subecjt[] = [
    {
        name: 'INGLES I',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'CESPEDES GUIZADA MARIA BENITA';
                group: '1';
                classroom: '693B'
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'viernes';
                teacher: 'CESPEDES GUIZADA MARIA BENITA';
                group: '1';
                classroom: '691D';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'CESPEDES GUIZADA MARIA BENITA';
                group: '2';
                classroom: '690D'
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'CESPEDES GUIZADA MARIA BENITA';
                group: '2';
                classroom: '690D';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: 'PEETERS ILONAA MAGDA LENA';
                group: '3';
                classroom: '655'
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: 'PEETERS ILONAA MAGDA LENA';
                group: '3';
                classroom: '692H';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'martes';
                teacher: 'GRILO SALVATIERRA MARIA ESTELA';
                group: '4';
                classroom: '690D'
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'GRILO SALVATIERRA MARIA ESTELA';
                group: '4';
                classroom: '690D';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'CESPEDES GUIZADA MARIA BENITA';
                group: '5';
                classroom: '692F'
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'viernes';
                teacher: 'CESPEDES GUIZADA MARIA BENITA';
                group: '5';
                classroom: '691B';
            }
        ]
    },
    {
        name: 'FISICA GENERAL',
        schedules: [
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'lunes';
                teacher: 'FLORES FLORES FREDDY';
                group: 'C';
                classroom: '617'
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'viernes';
                teacher: 'FLORES FLORES FREDDY';
                group: 'C';
                classroom: '693B';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'SHITIKOV GAGARINA GALINA';
                group: 'C1';
                classroom: '620'
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'viernes';
                teacher: ' TERRAZAS VARGAS JUAN CARLOS';
                group: '10';
                classroom: '620';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: ' MOREIRA CALIZAYA RENE';
                group: 'C3';
                classroom: '620';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'lunes';
                teacher: 'CASTRO LAZARTE CECILIA BEATRIZ';
                group: 'C4';
                classroom: '620';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'CASTRO LAZARTE CECILIA BEATRIZ';
                group: 'C5';
                classroom: '621';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'lunes';
                teacher: 'CASTRO LAZARTE CECILIA BEATRIZ';
                group: 'C6';
                classroom: '621';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'martes';
                teacher: 'FLORES FLORES FREDDY';
                group: 'C7';
                classroom: '620';
            }
        ]
    },
    {
        name: 'ALGEBRA I',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'RODRIGUEZ SEJAS JUAN ANTONIO';
                group: '10';
                classroom: '661'
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: 'RODRIGUEZ SEJAS JUAN ANTONIO';
                group: '10';
                classroom: '692C';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'RODRIGUEZ SEJAS JUAN ANTONIO';
                group: '10';
                classroom: '692F'
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'martes';
                teacher: ' LEON ROMERO GUALBERTO';
                group: '14';
                classroom: '692E';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'viernes';
                teacher: ' LEON ROMERO GUALBERTO';
                group: '14';
                classroom: '617C';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'sabado';
                teacher: 'LOVERA MAMANI MARIA BETHY';
                group: '14';
                classroom: '691E';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'miercoles';
                teacher: 'TABORGA ACHA FIDEL';
                group: 'C5';
                classroom: '617';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'viernes';
                teacher: 'TABORGA ACHA FIDEL';
                group: 'C6';
                classroom: '617c';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'sabado';
                teacher: 'TICLLA MAMANI IVAN';
                group: 'C7';
                classroom: '692B';
            }
        ]
    },
    {
        name: 'CALCULO I',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: ' ROJAS ZURITA RAMIRO';
                group: '11';
                classroom: '622';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: ' ROJAS ZURITA RAMIRO';
                group: '11';
                classroom: '690B';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: ' ROJAS ZURITA RAMIRO';
                group: '11';
                classroom: '692E'
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'lunes';
                teacher: ' DELGADILLO COSSIO DAVID ALFREDO';
                group: '12';
                classroom: '682B';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'martes';
                teacher: ' DELGADILLO COSSIO DAVID ALFREDO';
                group: '12';
                classroom: '617C';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'miercoles';
                teacher: 'DELGADILLO COSSIO DAVID ALFREDO';
                group: '12';
                classroom: '625D';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'OMONTE OJALVO JOSE ROBERTO';
                group: '17';
                classroom: '642';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'OMONTE OJALVO JOSE ROBERTO';
                group: '17';
                classroom: '691C';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'OMONTE OJALVO JOSE ROBERTO';
                group: '17';
                classroom: '692H';
            }
        ]
    },
    {
        name: 'INTRODUCCION A LA PROGRAMACION',
        schedules: [
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: ' SALAZAR SERRUDO CARLA';
                group: '1';
                classroom: '961a';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'viernes';
                teacher: ' SALAZAR SERRUDO CARLA';
                group: '1';
                classroom: '691e';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'viernes';
                teacher: ' SALAZAR CHOQUE JORGE';
                group: '1';
                classroom: '623'
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'lunes';
                teacher: ' COSTAS JAUREGUI VLADIMIR ABEL';
                group: '10';
                classroom: '692d';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: ' COSTAS JAUREGUI VLADIMIR ABEL';
                group: '10';
                classroom: '691a';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'miercoles';
                teacher: 'AUXILIAR';
                group: '10';
                classroom: '691b';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '617';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'miercoles';
                teacher: 'CUENCA VARGAS FERNANDO';
                group: '2';
                classroom: '691b';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'jueves';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '624';
            }
        ]
    },
    {
        name: 'METODOLOGIA INVESTIGACION Y TEC',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: ' ROMERO RODRIGUEZ PATRICIA';
                group: '1';
                classroom: '691c';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: ' ROMERO RODRIGUEZ PATRICIA';
                group: '1';
                classroom: '691b';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: ' FLORES VILLARROEL CORINA';
                group: '2';
                classroom: '691d';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: ' FLORES VILLARROEL CORINA';
                group: '2';
                classroom: '617c';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'lunes';
                teacher: 'LAIME ZAPATA VALENTIN';
                group: '4';
                classroom: '692d';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'miercoles';
                teacher: 'LAIME ZAPATA VALENTIN';
                group: '4';
                classroom: '617c';
            }
        ]
    },
    {
        name: 'ALGEBRA II',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'TAYLOR TERRAZAS DARLONG HOWARD';
                group: '5';
                classroom: '622';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'viernes';
                teacher: 'TAYLOR TERRAZAS DARLONG HOWARD';
                group: '5';
                classroom: '660';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: ' CLAURE VARGAS ANDRES ALEJANDRO';
                group: '5';
                classroom: '651'
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'jueves';
                teacher: ' TENORIO PANUNI DORIAN WILFREDO';
                group: '6';
                classroom: '660';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'viernes';
                teacher: ' TENORIO PANUNI DORIAN WILFREDO';
                group: '6';
                classroom: '691a';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'sabado';
                teacher: 'QUISPE MEDRANO REINALDO';
                group: '6';
                classroom: '692b';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'OMONTE OJALVO JOSE ROBERTO';
                group: '8';
                classroom: '624';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'masrtes';
                teacher: 'PACHECO YPURANI CLAUDIA';
                group: '8';
                classroom: '692d';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'jueves';
                teacher: 'OMONTE OJALVO JOSE ROBERTO';
                group: '8';
                classroom: '692b';
            }
        ]
    },
    {
        name: 'CALCULO II',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'TERRAZAS LOBO JUAN';
                group: '8';
                classroom: '692f';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'miercoles';
                teacher: 'UGARTE GALARZA MARLENE';
                group: '8';
                classroom: '625c';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'jueves';
                teacher: ' TERRAZAS LOBO JUAN';
                group: '8';
                classroom: '693a'
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'lunes';
                teacher: 'BUSTILLOS VARGAS ALEX ISRRAEL';
                group: '6a';
                classroom: '661';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'jueves';
                teacher: 'BUSTILLOS VARGAS ALEX ISRRAEL';
                group: '6a';
                classroom: '625c';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'viernes';
                teacher: 'BUSTILLOS VARGAS ALEX ISRRAEL';
                group: '6a';
                classroom: '691e';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'CATARI RIOS RAUL';
                group: '7';
                classroom: '622';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'CATARI RIOS RAUL';
                group: '7';
                classroom: '607';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'CATARI RIOS RAUL';
                group: '7';
                classroom: '693b';
            }
        ]
    },

    {
        name: ' MATEMATICA DISCRETA',
        schedules: [
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'miercoles';
                teacher: 'FERNANDEZ RAMOS DAVID';
                group: '1';
                classroom: '642';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'jueves';
                teacher: 'FERNANDEZ RAMOS DAVID';
                group: '1';
                classroom: '622';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'viernes';
                teacher: ' FERNANDEZ RAMOS DAVID';
                group: '1';
                classroom: '691d'
            },
            {
                startTime: '20:45';
                endTime: '21:15';
                day: 'lunes';
                teacher: 'DELGADILLO COSSIO DAVID ALFREDO';
                group: '2';
                classroom: '623';
            },
            {
                startTime: '20:45';
                endTime: '21:15';
                day: 'martes';
                teacher: 'DELGADILLO COSSIO DAVID ALFREDO';
                group: '2';
                classroom: '612';
            },
            {
                startTime: '20:45';
                endTime: '21:15';
                day: 'miercoles';
                teacher: 'DELGADILLO COSSIO DAVID ALFREDO';
                group: '2';
                classroom: '624';
            }
        ]
    },
    {
        name: 'ELEM. DE PROGRAMACION Y ESTRUC. DE DATOS',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'TORRICO BASCOPE ROSEMARY';
                group: '1';
                classroom: '617c';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'miercoles';
                teacher: 'AUX';
                group: '1';
                classroom: '651';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'viernes';
                teacher: ' TORRICO BASCOPE ROSEMARY';
                group: '1';
                classroom: '690c'
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'lunes';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '623';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'miercoles';
                teacher: 'AUX';
                group: '2';
                classroom: '623';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'jueves';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '624';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'AUX';
                group: '5';
                classroom: '691b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'AZERO ALCOCER PABLO';
                group: '5';
                classroom: '607';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'AZERO ALCOCER PABLO';
                group: '5';
                classroom: '693d';
            }
        ]
    },
    {
        name: 'ARQUITECTURA DE COMPUTADORAS I',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: ' ACHA PEREZ SAMUEL';
                group: '1';
                classroom: '622';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'sabado';
                teacher: '  ACHA PEREZ SAMUEL';
                group: '1';
                classroom: '623'
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'lunes';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '691b';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'jueves';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '624';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'AGREDA CORRALES LUIS ROBERTO';
                group: '3';
                classroom: '692a';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'miercoles';
                teacher: 'AGREDA CORRALES LUIS ROBERTO';
                group: '3';
                classroom: '617';
            }
        ]
    },
    {
        name: 'ECUACIONES DIFERENCIALES',
        schedules: [
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'miercoles';
                teacher: 'CATARI RIOS RAUL';
                group: '3a';
                classroom: '693c';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'CATARI RIOS RAUL';
                group: '3a';
                classroom: '623';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'sabado';
                teacher: ' CATARI RIOS RAUL';
                group: '3a';
                classroom: '617'
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'lunes';
                teacher: 'TAYLOR TERRAZAS DARLONG HOWARD';
                group: '4';
                classroom: '651';
            },
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'lunes';
                teacher: 'AUX';
                group: '4';
                classroom: '651';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'TAYLOR TERRAZAS DARLONG HOWARD';
                group: '4';
                classroom: '692c';
            }
        ]
    },

    {
        name: 'ESTADISTICA I',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'REVOLLO TERAN LUZ MAYA';
                group: '3';
                classroom: '692g';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'AUX';
                group: '3';
                classroom: '617b';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: ' REVOLLO TERAN LUZ MAYA';
                group: '3';
                classroom: '623'
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'AUX';
                group: '4';
                classroom: '642';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'martes';
                teacher: 'SORUCO MAITA JOSE ANTONIO';
                group: '4';
                classroom: '624';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'viernes';
                teacher: 'SORUCO MAITA JOSE ANTONIO';
                group: '4';
                classroom: '617';
            },
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'lunes';
                teacher: 'OMONTE OJALVO JOSE GIL';
                group: '5';
                classroom: '624';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'OMONTE OJALVO JOSE GIL';
                group: '5';
                classroom: '690b';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'sabado';
                teacher: 'OMONTE OJALVO JOSE GIL';
                group: '5';
                classroom: '691b';
            }
        ]
    },

    {
        name: 'CALCULO NUMERICO',
        schedules: [
            {
                startTime: '12:15';
                endTime: '14:45';
                day: 'lunes';
                teacher: 'JUCHANI BAZUALDO DEMETRIO';
                group: '2';
                classroom: '622';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'JUCHANI BAZUALDO DEMETRIO';
                group: '2';
                classroom: '693a';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: ' JUCHANI BAZUALDO DEMETRIO';
                group: '2';
                classroom: '693d'
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'ZABALAGA MONTANO OSCAR A.';
                group: '3';
                classroom: '644';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'martes';
                teacher: 'ZABALAGA MONTANO OSCAR A.';
                group: '3';
                classroom: '692h';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'miercoles';
                teacher: 'ZABALAGA MONTANO OSCAR A.';
                group: '3';
                classroom: '690d';
            }
        ]
    },
    {
        name: 'METODOS TECNICAS Y TALLER DE PROGRAMACION',
        schedules: [
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'FLORES VILLARROEL CORINA';
                group: '1';
                classroom: '652';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'FLORES VILLARROEL CORINA';
                group: '1';
                classroom: '625d';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: ' FLORES VILLARROEL CORINA';
                group: '1';
                classroom: '652'
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: 'MANZUR SORIA CARLOS B.';
                group: '2';
                classroom: 'INFLAB';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: 'MANZUR SORIA CARLOS B.';
                group: '2';
                classroom: '651';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: 'MANZUR SORIA CARLOS B.';
                group: '2';
                classroom: '651';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'MONTANO QUIROGA VICTOR HUGO';
                group: '3';
                classroom: '625d';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'MONTANO QUIROGA VICTOR HUGO';
                group: '3';
                classroom: 'INFOLAB';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: 'MONTANO QUIROGA VICTOR HUGO';
                group: '3';
                classroom: 'INFOLAB';
            }
        ]
    },
    {
        name: ' BASE DE DATOS I',
        schedules: [
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'martes';
                teacher: 'LAIME ZAPATA VALENTIN';
                group: '1';
                classroom: '691b';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'miercoles';
                teacher: 'LAIME ZAPATA VALENTIN';
                group: '1';
                classroom: '691b';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'jueves';
                teacher: ' LAIME ZAPATA VALENTIN';
                group: '1';
                classroom: '693d'
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'martes';
                teacher: 'CALANCHA NAVIA BORIS';
                group: '2';
                classroom: '651';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'miercoles';
                teacher: 'CALANCHA NAVIA BORIS';
                group: '2';
                classroom: '660';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'jueves';
                teacher: 'CALANCHA NAVIA BORIS';
                group: '2';
                classroom: '692g';
            }
        ]
    },

    {
        name: ' CIRCUITOS ELECTRONICOS',
        schedules: [
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'lunes';
                teacher: 'ZAMBRANA BURGOS JHOMIL EFRAIN';
                group: '2';
                classroom: '691a';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'sabado';
                teacher: ' ZAMBRANA BURGOS JHOMIL EFRAIN';
                group: '2';
                classroom: '692a'
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'lunes';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '623';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'miercoles';
                teacher: 'AUX';
                group: '2';
                classroom: '623';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'jueves';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '624';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'AUX';
                group: '5';
                classroom: '691b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'AZERO ALCOCER PABLO';
                group: '5';
                classroom: '607';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'AZERO ALCOCER PABLO';
                group: '5';
                classroom: '693d';
            }
        ]
    },
    {
        name: 'ESTADISTICA II',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'lunes';
                teacher: 'SORUCO MAITA JOSE ANTONIO';
                group: '2';
                classroom: '623';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: 'AUX';
                group: '2';
                classroom: '692a'
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'jueves';
                teacher: 'SORUCO MAITA JOSE ANTONIO';
                group: '2';
                classroom: '690MAT';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'OMONTE OJALVO JOSE ROBERTO';
                group: '3';
                classroom: '692b';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'jueves';
                teacher: 'AUX';
                group: '3';
                classroom: '693a';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'viernes';
                teacher: 'OMONTE OJALVO JOSE ROBERTO';
                group: '3';
                classroom: '691f';
            }
        ]
    },

    {
        name: ' BASE DE DATOS II',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: 'APARICIO YUJA TATIANA';
                group: '1';
                classroom: '617b';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'martes';
                teacher: 'APARICIO YUJA TATIANA';
                group: '1';
                classroom: 'INFOLAB';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: ' APARICIO YUJA TATIANA';
                group: '1';
                classroom: '617b'
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'lunes';
                teacher: 'APARICIO YUJA TATIANA';
                group: '2';
                classroom: '692b';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'APARICIO YUJA TATIANA';
                group: '2';
                classroom: 'INFOLAB';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'APARICIO YUJA TATIANA';
                group: '2';
                classroom: '612';
            }
        ]
    },

    {
        name: 'TALLER DE SISTEMAS OPERATIVOS',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: ' ORELLANA ARAOZ JORGE WALTER';
                group: '1';
                classroom: '651';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'miercoles';
                teacher: ' ORELLANA ARAOZ JORGE WALTER';
                group: '1';
                classroom: '691a';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'viernes';
                teacher: '  ORELLANA ARAOZ JORGE WALTER';
                group: '1';
                classroom: '691c'
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '655';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '692b';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'viernes';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '624';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'martes';
                teacher: 'CUSSI NICOLAS GROVER HUMBERTO';
                group: '3';
                classroom: '691e';
            },
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'jueves';
                teacher: 'CUSSI NICOLAS GROVER HUMBERTO';
                group: '3';
                classroom: '691a';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'sabado';
                teacher: 'CUSSI NICOLAS GROVER HUMBERTO';
                group: '3';
                classroom: 'INFOLAB';
            }
        ]
    },

    {
        name: 'SISTEMAS DE INFORMACION I',
        schedules: [
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'miercoles';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '1';
                classroom: '692b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '1';
                classroom: 'INFOLAB';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: ' SALAZAR SERRUDO CARLA';
                group: '1';
                classroom: '691e'
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'lunes';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '2';
                classroom: '691b';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '2';
                classroom: '642';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'miercoles';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '2';
                classroom: '693a';
            }]
    },
    {
        name: 'CONTABILIDAD BASICA',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'MEJIA URQUIETA VICTOR RAMIRO';
                group: '2';
                classroom: '625c';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: ' MEJIA URQUIETA VICTOR RAMIRO';
                group: '2';
                classroom: '693d'
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'ARANIBAR LA FUENTE LIGIA';
                group: '3';
                classroom: '691f';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'ARANIBAR LA FUENTE LIGIA';
                group: '3';
                classroom: '660';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'viernes';
                teacher: 'ARANIBAR LA FUENTE LIGIA';
                group: '3';
                classroom: '692c';
            },
        ]
    },

    {
        name: 'INVESTIGACION OPERATIVA I',
        schedules: [
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'PERICON BALDERRAMA ALFREDO';
                group: '1';
                classroom: '682l7in';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'martes';
                teacher: 'PERICON BALDERRAMA ALFREDO';
                group: '1';
                classroom: '682l7in';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: ' PERICON BALDERRAMA ALFREDO';
                group: '1';
                classroom: '682l7in'
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'QUIROZ CHAVEZ ABDON';
                group: '3';
                classroom: '623';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'QUIROZ CHAVEZ ABDON';
                group: '3';
                classroom: '623';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'jueves';
                teacher: 'QUIROZ CHAVEZ ABDON';
                group: '3';
                classroom: '624';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'REVOLLO TERAN LUZ MAYA';
                group: '4';
                classroom: '693c';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'REVOLLO TERAN LUZ MAYA';
                group: '4';
                classroom: '693c';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'REVOLLO TERAN LUZ MAYA';
                group: '4';
                classroom: '625d';
            }
        ]
    },
    {
        name: 'INGLES II',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'PEETERS ILONAA MAGDA LENA';
                group: '1';
                classroom: '691b';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: 'PEETERS ILONAA MAGDA LENA';
                group: '1';
                classroom: '661';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: ' PEETERS ILONAA MAGDA LENA';
                group: '2';
                classroom: '691b'
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'PEETERS ILONAA MAGDA LENA';
                group: '2';
                classroom: '691c';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'martes';
                teacher: 'PEETERS ILONAA MAGDA LENA';
                group: '3';
                classroom: '692g';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'viernes';
                teacher: 'PEETERS ILONAA MAGDA LENA';
                group: '3';
                classroom: '692h';
            }
        ]
    },

    {
        name: 'SISTEMAS DE INFORMACION II',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'martes';
                teacher: ' FLORES SOLIZ JUAN MARCELO';
                group: '1';
                classroom: '655';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: ' FLORES SOLIZ JUAN MARCELO';
                group: '1';
                classroom: '690d';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'viernes';
                teacher: '  FLORES SOLIZ JUAN MARCELO';
                group: '1';
                classroom: 'audmemi'
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'lunes';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '1a';
                classroom: '617b';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'martes';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '1a';
                classroom: '625d';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'viernes';
                teacher: 'SALAZAR SERRUDO CARLA';
                group: '1a';
                classroom: '691e';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: ' JALDIN ROSALES K. ROLANDO';
                group: '2';
                classroom: '655';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: ' JALDIN ROSALES K. ROLANDO';
                group: '2';
                classroom: '655';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'viernes';
                teacher: ' JALDIN ROSALES K. ROLANDO';
                group: '2';
                classroom: '690b';
            }
        ]
    },
    {
        name: 'APLICACION DE SISTEMAS OPERATIVOS',
        schedules: [
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'viernes';
                teacher: 'CUSSI NICOLAS GROVER HUMBERTO';
                group: '1';
                classroom: '693d';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'sabado';
                teacher: ' CUSSI NICOLAS GROVER HUMBERTO';
                group: '1';
                classroom: '691b'
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'lunes';
                teacher: 'CUSSI NICOLAS GROVER HUMBERTO';
                group: '2';
                classroom: '693b';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'CUSSI NICOLAS GROVER HUMBERTO';
                group: '2';
                classroom: '690b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'AYOROA CARDOZO JOSE RICHARD';
                group: '3';
                classroom: 'INFOLAB';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'AYOROA CARDOZO JOSE RICHARD';
                group: '3';
                classroom: 'INFOLABd';
            }
        ]
    },

    {
        name: 'TALLER DE BASE DE DATOS',
        schedules: [
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'lunes';
                teacher: 'CALANCHA NAVIA BORIS';
                group: '1';
                classroom: '690b';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'viernes';
                teacher: ' CALANCHA NAVIA BORIS';
                group: '1';
                classroom: '690b'
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'martes';
                teacher: 'APARICIO YUJA TATIANA';
                group: '2';
                classroom: '692h';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'miercoles';
                teacher: 'APARICIO YUJA TATIANA';
                group: '2';
                classroom: '690c';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: 'FLORES SOLIZ JUAN MARCELO';
                group: '3';
                classroom: '690b';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: 'FLORES SOLIZ JUAN MARCELO';
                group: '3';
                classroom: '690b';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'CALANCHA NAVIA BORIS';
                group: '4';
                classroom: '690d';
            },
            {
                startTime: '15:45';
                endTime: '17:45';
                day: 'jueves';
                teacher: 'CALANCHA NAVIA BORIS';
                group: '4';
                classroom: '690c';
            }
        ]
    },
    {
        name: 'SISTEMAS I',
        schedules: [
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'lunes';
                teacher: 'FIORILO LOZADA AMERICO';
                group: '2';
                classroom: '692b';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'viernes';
                teacher: 'FIORILO LOZADA AMERICO';
                group: '2';
                classroom: '692c';
            }]
    },
    {
        name: ' INVESTIGACION OPERATIVA II',
        schedules: [
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'miercoles';
                teacher: 'MANCHEGO CASTELLON ROBERTO JUAN';
                group: '2';
                classroom: '692c';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'jueves';
                teacher: 'MANCHEGO CASTELLON ROBERTO JUAN';
                group: '2';
                classroom: '692d';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'sabado';
                teacher: 'MANCHEGO CASTELLON ROBERTO JUAN';
                group: '2';
                classroom: '607';
            }
        ]
    },
    {
        name: 'MERCADOTECNIA',
        schedules: [
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'lunes';
                teacher: 'GUTIERREZ ANDRADE OSVALDO WALTER';
                group: '2';
                classroom: '691e';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'sabado';
                teacher: 'GUTIERREZ ANDRADE OSVALDO WALTER';
                group: '2';
                classroom: '692e';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'martes';
                teacher: 'SARMIENTO FRANCO ARIEL ANTONIO';
                group: '3';
                classroom: '623';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'miercoles';
                teacher: 'SARMIENTO FRANCO ARIEL ANTONIO';
                group: '3';
                classroom: '690d';
            }
        ]
    },

    {
        name: 'SIMULACION DE SISTEMAS',
        schedules: [
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'lunes';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '1';
                classroom: '691c';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '1';
                classroom: '691d';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'lunes';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '2';
                classroom: '655';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'martes';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '2';
                classroom: '625c';
            }
        ]
    },

    {
        name: 'INGENIERIA DE SOFTWARE',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'martes';
                teacher: 'CAMACHO DEL CASTILLO INDIRA';
                group: '1';
                classroom: '651';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: 'CAMACHO DEL CASTILLO INDIRA';
                group: '1';
                classroom: '652';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: 'CAMACHO DEL CASTILLO INDIRA';
                group: '1';
                classroom: '692d';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'TORRICO BASCOPE ROSEMARY';
                group: '2';
                classroom: '690b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'TORRICO BASCOPE ROSEMARY';
                group: '2';
                classroom: 'infolab';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'TORRICO BASCOPE ROSEMARY';
                group: '2';
                classroom: '690d';
            }
        ]
    },
    {
        name: 'INTELIGENCIA ARTIFICIAL',
        schedules: [
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'GARCIA PEREZ CARMEN ROSA';
                group: '1';
                classroom: '692d';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'GARCIA PEREZ CARMEN ROSA';
                group: '1';
                classroom: '692a';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: 'GARCIA PEREZ CARMEN ROSA';
                group: '1';
                classroom: '692d';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'lunes';
                teacher: 'RODRIGUEZ BILBAO ERIKA PATRICIA';
                group: '2';
                classroom: '625d';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'martes';
                teacher: 'RODRIGUEZ BILBAO ERIKA PATRICIA';
                group: '2';
                classroom: '692b';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'miercoles';
                teacher: 'RODRIGUEZ BILBAO ERIKA PATRICIA';
                group: '2';
                classroom: '617';
            }
        ]
    },

    {
        name: 'REDES DE COMPUTADORAS',
        schedules: [
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'lunes';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '1';
                classroom: '692b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '1';
                classroom: '693a';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '1';
                classroom: '692c';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'lunes';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '691b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '693a';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '692g';
            }
        ]
    },
    {
        name: 'SISTEMAS II',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'martes';
                teacher: 'GARCIA MOLINA JUAN RUBEN';
                group: '2';
                classroom: '625d';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: 'GARCIA MOLINA JUAN RUBEN';
                group: '2';
                classroom: '607';
            }
        ]
    },
    {
        name: 'SISTEMAS ECONOMICOS',
        schedules: [
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'lunes';
                teacher: 'VARGAS PEREDO EMIR FELIX';
                group: '2';
                classroom: '642';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'viernes';
                teacher: 'VARGAS PEREDO EMIR FELIX';
                group: '2';
                classroom: '622';
            }
        ]
    },
    {
        name: 'REDES DE NUEVA GENERACION',
        schedules: [
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'lunes';
                teacher: 'MONTOYA BURGOS YONY RICHARD';
                group: '1';
                classroom: 'INFOLAB';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'miercoles';
                teacher: 'MONTOYA BURGOS YONY RICHARD';
                group: '1';
                classroom: '655';
            }
        ]
    },

    {
        name: 'TALLER DE INGENIERIA DE SOFTWARE',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'lunes';
                teacher: 'FLORES VILLARROEL CORINA';
                group: '1';
                classroom: '690d';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'FLORES VILLARROEL CORINA';
                group: '1';
                classroom: '655';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: '651'
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: 'BLANCO COCA LETICIA';
                group: '2';
                classroom: 'INFOLAB';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: 'ESCALERA FERNANDEZ DAVID';
                group: '3';
                classroom: '691b';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: 'ESCALERA FERNANDEZ DAVID';
                group: '3';
                classroom: 'AUDIT';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'RODRIGUEZ BILBAO ERIKA PATRICIA';
                group: '4';
                classroom: '655';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'viernes';
                teacher: 'RODRIGUEZ BILBAO ERIKA PATRICIA';
                group: '4';
                classroom: '692c';
            }
        ]
    },
    {
        name: 'GESTION DE CALIDAD DE SOFTWARE',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'TORRICO BASCOPE ROSEMARY';
                group: '2';
                classroom: 'INFOLAB';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'TORRICO BASCOPE ROSEMARY';
                group: '2';
                classroom: 'INFOLAB';
            }
        ]
    },
    {
        name: 'REDES AVANZADAS DE COMPUTADORAS',
        schedules: [
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'martes';
                teacher: 'MONTECINOS CHOQUE MARCO ANTONIO';
                group: '2';
                classroom: '607';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'jueves';
                teacher: 'MONTECINOS CHOQUE MARCO ANTONIO';
                group: '2';
                classroom: '692a';
            }
        ]
    },
    {
        name: 'DINAMICA DE SISTEMAS',
        schedules: [
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'martes';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '690c';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'jueves';
                teacher: 'ORELLANA ARAOZ JORGE WALTER';
                group: '2';
                classroom: '655';
            }
        ]
    },
    {
        name: 'CLOUD COMPUTING',
        schedules: [
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'lunes';
                teacher: 'MONTOYA BURGOS YONY RICHARD';
                group: '1';
                classroom: 'INFOLAB';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'MONTOYA BURGOS YONY RICHARD';
                group: '1';
                classroom: '625c';
            }
        ]
    },
    {
        name: 'CLOUD COMPUTING',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'lunes';
                teacher: 'ACHA PEREZ SAMUEL';
                group: '5';
                classroom: '692e';
            },
            {
                startTime: '06:45';
                endTime: '09:00';
                day: 'martes';
                teacher: 'ACHA PEREZ SAMUEL';
                group: '5';
                classroom: '682l3';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: 'ACHA PEREZ SAMUEL';
                group: '5';
                classroom: '693b';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'sabado';
                teacher: 'ACHA PEREZ SAMUEL';
                group: '5';
                classroom: '623';
            }
        ]
    },

    {
        name: 'PLANIFICACION Y EVALUACION DE PROYECTOS',
        schedules: [
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'martes';
                teacher: 'ACHA PEREZ SAMUEL';
                group: '2';
                classroom: '660';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'miercoles';
                teacher: 'ACHA PEREZ SAMUEL';
                group: '2';
                classroom: '622';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'ACHA PEREZ SAMUEL';
                group: '2';
                classroom: '690b';
            }
        ]
    },
    {
        name: 'INGLES III',
        schedules: [
            {
                startTime: '14:15';
                endTime: '13:45';
                day: 'martes';
                teacher: 'GRILO SALVATIERRA MARIA ESTELA';
                group: '1';
                classroom: '693a';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'viernes';
                teacher: 'GRILO SALVATIERRA MARIA ESTELA';
                group: '1';
                classroom: '693b';
            }
        ]
    },
    {
        name: 'EVALUACION Y AUDITORIA DE SISTEMAS',
        schedules: [
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'ROMERO RODRIGUEZ PATRICIA';
                group: '1';
                classroom: '691f';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: 'ROMERO RODRIGUEZ PATRICIA';
                group: '1';
                classroom: '690b';
            }, {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'ROMERO RODRIGUEZ PATRICIA';
                group: '1';
                classroom: '690c';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'VILLARROEL NOVILLO JIMMY';
                group: '2';
                classroom: '692h';
            }, {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'VILLARROEL NOVILLO JIMMY';
                group: '2';
                classroom: '691d';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'miercoles';
                teacher: 'VILLARROEL NOVILLO JIMMY';
                group: '2';
                classroom: '690b';
            }
        ]
    },
    {
        name: 'TALLER DE SIMULACION DE SISTEMAS',
        schedules: [
            {
                startTime: '20:15';
                endTime: ':45';
                day: 'lunes';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '1';
                classroom: 'INFODEP';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'miercoles';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '1';
                classroom: 'INFOLAB';
            }, {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'AYOROA CARDOZO JOSE RICHARD';
                group: '2';
                classroom: '690c';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'AYOROA CARDOZO JOSE RICHARD';
                group: '2';
                classroom: 'INFOLAB';
            }
        ]
    },
    {
        name: 'METODOL. Y PLANIF. DE PROYECTO DE GRADO',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'JALDIN ROSALES K. ROLANDO';
                group: '1';
                classroom: '655';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: 'JALDIN ROSALES K. ROLANDO';
                group: '1';
                classroom: '655';
            }, {
                startTime: '08:15';
                endTime: '09:45';
                day: 'viernes';
                teacher: 'JALDIN ROSALES K. ROLANDO';
                group: '1';
                classroom: '655';
            },
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'lunes';
                teacher: 'FIORILO LOZADA AMERICO';
                group: '4';
                classroom: '692d';
            }, {
                startTime: '18:45';
                endTime: '20:15';
                day: 'martes';
                teacher: 'FIORILO LOZADA AMERICO';
                group: '4';
                classroom: '642';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'miercoles';
                teacher: 'FIORILO LOZADA AMERICO';
                group: '4';
                classroom: '690c';
            },
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'martes';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '5';
                classroom: 'INFODEP';
            }, {
                startTime: '20:15';
                endTime: '21:45';
                day: 'miercoles';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '5';
                classroom: 'INFODEP';
            },
            {
                startTime: '15:45';
                endTime: '17:15';
                day: 'jueves';
                teacher: 'VILLARROEL TAPIA HENRY FRANK';
                group: '5';
                classroom: 'INFODEP';
            }
        ]
    },
    {
        name: 'SEGURIDAD DE SISTEMAS',
        schedules: [
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'lunes';
                teacher: 'ANTEZANA CAMACHO MARCELO';
                group: '1';
                classroom: '660';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'martes';
                teacher: 'ANTEZANA CAMACHO MARCELO';
                group: '1';
                classroom: 'INFOLAB';
            }
        ]
    },
    {
        name: 'INFORMATICA FORENSE',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'ANTEZANA CAMACHO MARCELO';
                group: '1';
                classroom: 'INFOLAB';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'ANTEZANA CAMACHO MARCELO';
                group: '1';
                classroom: '660';
            }
        ]
    },
    {
        name: 'GESTION ESTRATEGICA DE EMPRESAS',
        schedules: [
            {
                startTime: '06:45';
                endTime: '09:45';
                day: 'lunes';
                teacher: 'GUZMAN ORELLANA GONZALO ENRIQUE';
                group: '2';
                classroom: '682l8in';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'GUZMAN ORELLANA GONZALO ENRIQUE';
                group: '2';
                classroom: '682l8in';
            }
        ]
    },

    {
        name: 'PROYECTO FINAL',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'MONTANO QUIROGA VICTOR HUGO';
                group: '2';
                classroom: 'INFODEP';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'viernes';
                teacher: 'MONTANO QUIROGA VICTOR HUGO';
                group: '2';
                classroom: 'INFOLAB';
            }, {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: 'GARCIA PEREZ CARMEN ROSA';
                group: '3';
                classroom: 'INFODEP';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'GARCIA PEREZ CARMEN ROSA';
                group: '3';
                classroom: '655';
            }, {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'ROMERO RODRIGUEZ PATRICIA';
                group: '4';
                classroom: '690c';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'miercoles';
                teacher: 'ROMERO RODRIGUEZ PATRICIA';
                group: '4';
                classroom: '617c';
            },
            {
                startTime: '14:15';
                endTime: '15:45';
                day: 'lunes';
                teacher: 'VILLARROEL NOVILLO JIMMY';
                group: '5';
                classroom: 'INFODEP';
            }, {
                startTime: '09:45';
                endTime: '11:15';
                day: 'miercoles';
                teacher: 'VILLARROEL NOVILLO JIMMY';
                group: '5';
                classroom: 'INFODEP';
            }
        ]
    },

    {
        name: ' ENTORNOS VIRTUALES DE APRENDIZAJE',
        schedules: [
            {
                startTime: '09:45';
                endTime: '11:45';
                day: 'lunes';
                teacher: 'ANTEZANA CAMACHO MARCELO';
                group: '2';
                classroom: '655';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'ANTEZANA CAMACHO MARCELO';
                group: '2';
                classroom: 'INFOLAB';
            }
        ]
    },
    {
        name: 'ENTORNOS VIRTUALES DE APRENDIZAJE',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: 'COSTAS JAUREGUI VLADIMIR ABEL';
                group: '1';
                classroom: '692g';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: 'COSTAS JAUREGUI VLADIMIR ABEL';
                group: '1';
                classroom: '690b';
            }
        ]
    },
    {
        name: 'SERVICIOS TELEMATICOS',
        schedules: [
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'martes';
                teacher: 'FIORILO LOZADA AMERICO';
                group: '1';
                classroom: '691c';
            },
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'viernes';
                teacher: 'FIORILO LOZADA AMERICO';
                group: '1';
                classroom: '691e';
            }
        ]
    },
    {
        name: ' BUSINESS INTELLIGENCE Y BIG DATA',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'sabado';
                teacher: 'ESCALERA FERNANDEZ DAVID';
                group: '1';
                classroom: '693b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'sabado';
                teacher: 'ESCALERA FERNANDEZ DAVID';
                group: '1';
                classroom: '692a';
            }
        ]
    },
    {
        name: 'CIENCIA DE DATOS Y MACHINE LEARNING',
        schedules: [
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'lunes';
                teacher: 'RODRIGUEZ BILBAO ERIKA PATRICIA';
                group: '1';
                classroom: '693d';
            },
            {
                startTime: '17:15';
                endTime: '18:45';
                day: 'viernes';
                teacher: 'RODRIGUEZ BILBAO ERIKA PATRICIA';
                group: '1';
                classroom: '655';
            }
        ]
    },
    {
        name: 'PLANIF. Y CONTROL DE LA PRODUCCION I',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'QUIROZ CHAVEZ ABDON';
                group: '3';
                classroom: '661';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'miercoles';
                teacher: 'QUIROZ CHAVEZ ABDON';
                group: '3';
                classroom: '691f';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'QUIROZ CHAVEZ ABDON';
                group: '3';
                classroom: '651';
            }
        ]
    },
    {
        name: 'INGENIERIA ECONOMICA',
        schedules: [
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'martes';
                teacher: 'por designar';
                group: '2';
                classroom: 'AUDI';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: 'por designar';
                group: '2';
                classroom: '684b';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'por designar';
                group: '2';
                classroom: '692b';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'martes';
                teacher: 'ARANIBAR LA FUENTE LIGIA';
                group: '3';
                classroom: '690c';
            },
            {
                startTime: '12:45';
                endTime: '14:15';
                day: 'miercoles';
                teacher: 'ARANIBAR LA FUENTE LIGIA';
                group: '3';
                classroom: '692c';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'jueves';
                teacher: 'ARANIBAR LA FUENTE LIGIA';
                group: '3';
                classroom: '690b';
            }
        ]
    },
    {
        name: 'PLANIF. Y CONTROL DE LA PRODUCCION II',
        schedules: [
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'martes';
                teacher: 'CHOQUE FLORES ALEX DANCHGELO';
                group: '3';
                classroom: '690b';
            },
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'jueves';
                teacher: 'CHOQUE FLORES ALEX DANCHGELO';
                group: '3';
                classroom: '625d';
            },
            {
                startTime: '09:45';
                endTime: '11:15';
                day: 'sabado';
                teacher: 'CHOQUE FLORES ALEX DANCHGELO';
                group: '3';
                classroom: '691f';
            }
        ]
    },

    {
        name: 'COSTOS INDUSTRIALES',
        schedules: [
            {
                startTime: '18:45';
                endTime: '20:15';
                day: 'lunes';
                teacher: 'LIMA VACAFLOR TITO ANIBAL';
                group: '2';
                classroom: '617';
            },
            {
                startTime: '20:15';
                endTime: '21:45';
                day: 'miercoles';
                teacher: 'LIMA VACAFLOR TITO ANIBAL';
                group: '2';
                classroom: '612';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'sabado';
                teacher: 'LIMA VACAFLOR TITO ANIBAL';
                group: '2';
                classroom: '617';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'jueves';
                teacher: 'MEJIA URQUIETA VICTOR RAMIRO';
                group: '3';
                classroom: '692c';
            },
            {
                startTime: '11:15';
                endTime: '12:45';
                day: 'viernes';
                teacher: 'MEJIA URQUIETA VICTOR RAMIRO';
                group: '3';
                classroom: '692f';
            }
        ]
    },
    {
        name: 'INGENIERIA DE METODOS Y REINGENIERIA',
        schedules: [
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'martes';
                teacher: 'COSIO PAPADOPOLIS CARLOS JAVIER';
                group: '2';
                classroom: '691b';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'miercoles';
                teacher: 'COSIO PAPADOPOLIS CARLOS JAVIER';
                group: '2';
                classroom: '691c';
            },
            {
                startTime: '08:15';
                endTime: '09:45';
                day: 'jueves';
                teacher: 'AUX';
                group: '2';
                classroom: '617c';
            },
            {
                startTime: '06:45';
                endTime: '08:15';
                day: 'viernes';
                teacher: 'COSIO PAPADOPOLIS CARLOS JAVIER';
                group: '2';
                classroom: '692a';
            }
        ]
    },
]