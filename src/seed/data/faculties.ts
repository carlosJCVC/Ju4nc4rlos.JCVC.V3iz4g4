interface Career {
    code: string,
    name: string;
    type: CareerType 
}

interface Faculty {
    name: string;
    careers: Career[]
}

type CareerType = 'Carrera'|'Programa';


interface Data {
    faculties: Faculty[];
}

export const faculties: Faculty[] = [
    {
        name: 'FAC. CIENCIAS AGRICOLAS Y PECUARIAS',
        careers: [
            {
                code: '103020',
                name: 'LIC. EN ING. AGR TROP MAN R. REN',
                type: 'Carrera'
            },
            {
                code:  '019701',
                name: 'LIC. EN INGENIERIA AGRICOLA',
                type: 'Carrera'
            },
            {
                code: '649701',
                name: 'LIC. EN INGENIERIA FITOTECNISTA',
                type: 'Carrera'
            },
            {
                code: '730602',
                name: 'LIC. EN INGENIERIA FORESTAL(NUE)',
                type: 'Carrera'
            },
            {
                code: '770201',
                name: 'LIC. INGENIERO AGRONOMO ZOOTECNISTA',
                type: 'Carrera'
            },
            {
                code: '117071',
                name: 'LICENCIATURA EN ING. AGROINDUSTRIAL',
                type: 'Carrera'
            },
            {
                code: '718801',
                name: 'LICENCIATURA EN INGENIERIA AGRONOMICA',
                type: 'Carrera'
            },
            {
                code: '128091',
                name: 'PRG DESC. DE LIC. EN ING. DEL MEDIO AMB.',
                type: 'Programa'
            },
            {
                code: '102040',
                name: 'PROGRAMA COMPLEMENTACION ING. FORESTA',
                type: 'Programa'
            },
            {
                code: '730001',
                name: 'PROGRAMA LIC. EN INGENIERIA FORESTAL',
                type: 'Programa'
            },
            {
                code: '709701',
                name: 'TEC. SUPERIOR EN MECANIZACION AGRICOLA',
                type: 'Carrera'
            },
            {
                code: '135121',
                name: 'TEC. UNIV. SUP. GES. TERR. DES. END. SUS',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. CS.FARMACEUTICAS Y BIOQUIMICAS',
        careers: [
            {
                code: '049001',
                name: '	LICENCIATURA EN BIOQUIMICA Y FARMACIA',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. CIENCIAS ECONOMICAS',
        careers: [
            {
                code: '109401',
                name: 'LIC. EN ADMINISTRACION DE EMPRESAS',
                type: 'Carrera'
            },
            {
                code: '089801',
                name: 'LICENCIATURA EN CONTADURIA PUBLICA',
                type: 'Carrera'
            },
            {
                code: '059801',
                name: 'LICENCIATURA EN ECONOMIA',
                type: 'Carrera'
            },
            {
                code: '125091',
                name: 'LICENCIATURA EN INGENIERIA COMERCIAL',
                type: 'Carrera'
            },
            {
                code: '126091',
                name: 'LICENCIATURA EN INGENIERIA FINANCIERA',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. DESARROLLO RURAL Y TERRITORIAL',
        careers: [
            {
                code: '132091',
                name: 'LIC. EN PROD. AGRARIA Y DES. TERRITORIAL',
                type: 'Programa'
            },
            {
                code: '163211',
                name: 'PROG LIC EN ING EN GEST DE REC HID. AGRO',
                type: 'Programa'
            },
            {
                code: '119071',
                name: 'PROG. COM. LIC. DESARR. RURAL SOSTENIBLE',
                type: 'Programa'
            },
            {
                code: '169231',
                name: 'PROG. LIC. EN INGENIERIA EN PISCICULTURA',
                type: 'Programa'
            },
            {
                code: '168201',
                name: 'TECNICO SUPERIOR EN AGRONOMIA',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. ODONTOLOGIA',
        careers: [
            {
                code: '179901',
                name: 'LIC. EN ODONTOLOGIA (PLAN NUEVO)',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. MEDICINA',
        careers: [
            {
                code: '129091',
                name: 'LIC. EN FISIOTERAPIA Y KINESIOLOGIA',
                type: 'Carrera'
            },
            {
                code: '188301',
                name: 'LICENCIATURA EN MEDICINA',
                type: 'Carrera'
            },
            {
                code: '133011',
                name: 'LICENCIATURA EN NUTRICION Y DIETETICA',
                type: 'Carrera'
            },
            {
                code: '118071',
                name: 'PROG DE COMPL EN LIC FISIOTERAPIA Y KINE',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. ARQUITECTURA Y CIENCIAS DEL HABITAT',
        careers: [
            {
                code: '156151',
                name: 'LIC. EN DIS. INTERIORES Y DEL MOBILIARIO',
                type: 'Programa'
            },
            {
                code: '122081',
                name: 'LIC. EN DISEÑO GRAF Y COMUNIC VISUAL',
                type: 'Programa'
            },
            {
                code: '127091',
                name: 'LIC. EN PLANIF. DEL TERR. Y MED. AMB',
                type: 'Carrera'
            },
            {
                code: '202002',
                name: 'LICENCIATURA EN ARQUITECTURA',
                type: 'Carrera'
            },
            {
                code: '231802',
                name: 'LICENCIATURA EN TURISMO',
                type: 'Carrera'
            },
            {
                code: '161191',
                name: 'PR. TEC. UNIV. MED. ETNOTURISMO COMUNIT.',
                type: 'Programa'
            },
            {
                code: '229801',
                name: 'TECNICO UNIV. SUPERIOR EN CONSTRUCCIONES',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. HUMANIDADES Y CS. DE EDUCACION',
        careers: [
            {
                code: '269301',
                name: 'LIC. EN LINGUIS. APLIC.ENSEÑANZA LENGUAS',
                type: 'Carrera'
            },
            {
                code: '251302',
                name: 'LICENCIATURA EN CIENCIAS DE LA EDUCACION',
                type: 'Carrera'
            },
            {
                code: '258301',
                name: 'LICENCIATURA EN CIENCIAS DE LA EDUCACION',
                type: 'Carrera'
            },
            {
                code: '140502',
                name: 'LICENCIATURA EN COMUNICACION SOCIAL(NUE)',
                type: 'Carrera'
            },
            {
                code: '240101',
                name: 'LICENCIATURA EN PSICOLOGIA (NUE)',
                type: 'Carrera'
            },
            {
                code: '108061',
                name: 'LICENCIATURA EN TRABAJO SOCIAL',
                type: 'Carrera'
            },
            {
                code: '179901',
                name: 'PROG TEC SUP. EN EDUC. INFANT PARVULARIO',
                type: 'Programa'
            },
            {
                code: '124081',
                name: 'PROG. LIC. EN PEDAGOGIA SOCIAL PRODUCTI',
                type: 'Programa'
            },
            {
                code: '147141',
                name: 'PROG. LIC. EN CS. ACT. FISICA Y DEPORTE',
                type: 'Programa'
            },
            {
                code: '153141',
                name: 'PROG. LIC. ESP. EN CIEN. SOC. E INTERCUL',
                type: 'Programa'
            },
            {
                code: '152141',
                name: 'PROG. LIC. ESP. EN LENG. ORIG. Y COMUNIC',
                type: 'Programa'
            },
            {
                code: '145141',
                name: 'PROGRAMA DE LICENCIATURA EN MUSICA',
                type: 'Programa'
            },
            {
                code: '690602',
                name: 'PROGRAMA LIC. ESP. ED. INTERCUL.BILINGUE',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. CIENCIAS JURIDICAS Y POLITICAS',
        careers: [
            {
                code: '279901',
                name: 'LICENCIATURA EN CIENCIAS JURIDICAS',
                type: 'Carrera'
            },
            {
                code: '280101',
                name: 'LICENCIATURA EN CIENCIAS POLITICAS (NUE)',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. CIENCIAS Y TECNOLOGIA',
        careers: [
            {
                code: '114071',
                name: 'LICENCIATURA DIDACTICA MATEMATICA',
                type: 'Carrera'
            },
            {
                code: '399501',
                name: 'LICENCIATURA EN BIOLOGIA',
                type: 'Carrera'
            },
            {
                code: '760101',
                name: 'LICENCIATURA EN DIDACTICA DE LA FISICA',
                type: 'Carrera'
            },
            {
                code: '359201',
                name: 'LICENCIATURA EN FISICA',
                type: 'Carrera'
            },
            {
                code: '650001',
                name: 'LICENCIATURA EN ING. ELECTROMECANICA',
                type: 'Carrera'
            },
            {
                code: '320902',
                name: 'LICENCIATURA EN INGENIERIA CIVIL (NUEVO)',
                type: 'Carrera'
            },
            {
                code: '409701',
                name: 'LICENCIATURA EN INGENIERIA DE ALIMENTOS',
                type: 'Carrera'
            },
            {
                code: '419701',
                name: 'LICENCIATURA EN INGENIERIA DE SISTEMAS',
                type: 'Carrera'
            },
            {
                code: '411702',
                name: 'LICENCIATURA EN INGENIERIA DE SISTEMAS',
                type: 'Carrera'
            },
            {
                code: '299701',
                name: 'LICENCIATURA EN INGENIERIA ELECTRICA',
                type: 'Carrera'
            },
            {
                code: '429701',
                name: 'LICENCIATURA EN INGENIERIA ELECTRONICA',
                type: 'Carrera'
            },
            {
                code: '166231',
                name: 'LICENCIATURA EN INGENIERIA EN ENERGIA',
                type: 'Carrera'
            },
            {
                code: '309801',
                name: 'LICENCIATURA EN INGENIERIA INDUSTRIAL',
                type: 'Carrera'
            },
            {
                code: '134111',
                name: 'LICENCIATURA EN INGENIERIA INFORMATICA',
                type: 'Carrera'
            },
            {
                code: '439801',
                name: 'LICENCIATURA EN INGENIERIA MATEMATICA',
                type: 'Carrera'
            },
            {
                code: '319801',
                name: 'LICENCIATURA EN INGENIERIA MECANICA',
                type: 'Carrera'
            },
            {
                code: '339701',
                name: 'LICENCIATURA EN INGENIERIA QUIMICA',
                type: 'Carrera'
            },
            {
                code: '349701',
                name: 'LICENCIATURA EN MATEMATICAS',
                type: 'Carrera'
            },
            {
                code: '389701',
                name: 'LICENCIATURA EN QUIMICA',
                type: 'Carrera'
            },
            {
                code: '165221',
                name: 'PROGRAMA DE INGENIERIA EN BIOTECNOLOGIA',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. POLITECNICA DEL VALLE ALTO',
        careers: [
            {
                code: '590602',
                name: 'AUXILIAR TECNICO EN ENFERMERIA',
                type: 'Carrera'
            },
            {
                code: '131091',
                name: 'LIC. EN ING. MEC. AUTOMOT. Y MAQ. AGROIN',
                type: 'Programa'
            },
            {
                code: '146131',
                name: 'PRG. COMP. LIC. ING. MEC. AUT. Y MAQ. AG',
                type: 'Programa'
            },
            {
                code: '146142',
                name: 'PRG. COMP. LIC. ING. MEC. AUT. Y MAQ. AG',
                type: 'Programa'
            },
            {
                code: '123081',
                name: 'PRG. TEC. MED. EN GEST MUN Y DES END SOS',
                type: 'Programa'
            },
            {
                code: '155162',
                name: 'TEC. UNIV. MEDIO EN ENFERMERIA (NUEVO)',
                type: 'Programa'
            },
            {
                code: '569201',
                name: 'TEC.UNIV. SUP. EN INDUSTRIA DE ALIMENTOS',
                type: 'Carrera'
            },
            {
                code: '720101',
                name: '	TEC.UNIV.SUP. EN MECANICA AUTOMOTRIZ',
                type: 'Carrera'
            },
            {
                code: '589401',
                name: 'TEC.UNIV.SUP. EN CONSTRUCCION CIVIL',
                type: 'Carrera'
            },
            {
                code: '489201',
                name: 'TEC.UNIV.SUP. EN MECANICA INDUSTRIAL',
                type: 'Carrera'
            },
            {
                code: '529801',
                name: 'TEC.UNIV.SUP. EN QUIMICA INDUSTRIAL',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. CIENCIAS SOCIALES',
        careers: [
            {
                code: '150802',
                name: 'LICENCIATURA EN SOCIOLOGIA',
                type: 'Carrera'
            },
            {
                code: '142131',
                name: 'PROGRAMA DE LICENCIATURA EN ANTROPOLOGIA',
                type: 'Carrera'
            },
            {
                code: '164221',
                name: 'PROGRAMA DE LICENCIATURA EN HISTORIA',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. UNID. ACAD.DESC.SAN SIMON TROPICO',
        careers: [
            {
                code: '149141',
                name: 'PROG. DE LIC. EN INGENIERIA AMBIENTAL',
                type: 'Programa'
            },
            {
                code: '150141',
                name: 'PROG. DE LIC. EN INGENIERIA PETROQUIMICA',
                type: 'Programa'
            },
            {
                code: '144131',
                name: 'PROG. DE LICENCIATURA EN COMUNICACION',
                type: 'Programa'
            },
            {
                code: '158161',
                name: 'PROG. DE LICENCIATURA EN ENFERMERIA',
                type: 'Programa'
            },
            {
                code: '148141',
                name: 'PROG. LIC. EN ADMINISTRACION DE EMPRESAS',
                type: 'Programa'
            },
            {
                code: '159161',
                name: 'PROG. LICENCIATURA EN PEDAGOGIA SOCIAL',
                type: 'Programa'
            },
            {
                code: '138131',
                name: 'PROGRAMA DE LIC. EN ENFERMERIA OBSTETRIZ',
                type: 'Programa'
            },
            {
                code: '136121',
                name: 'PROGRAMA DE LIC. EN INGENIERIA AMBIENTAL',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. UNID. ACAD.DESC.SAN SIMON VALLE SACTA',
        careers: [
            {
                code: '162211',
                name: 'PROG. LICENCIATURA EN CONTADURIA PUBLICA',
                type: 'Programa'
            },
            {
                code: '141131',
                name: 'PROGRAMA DE LIC. EN ENFERMERIA OBSTETRIZ',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. UNID. ACAD.DESC.SAN SIMON ANDINA',
        careers: [
            {
                code: '143131',
                name: '	PROG. LIC. EN GEST. DES. ENDOG Y AGROEC',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. CIENCIAS VETERINARIAS',
        careers: [
            {
                code: '039503',
                name: 'LIC. EN MEDICINA VETERINARIA Y ZOOTECNIA',
                type: 'Carrera'
            },
        ]
    },
    {
        name: 'FAC. UNID.ACAD.DESC.SAN SIMON CONOS',
        careers: [
            {
                code: '157161',
                name: 'PROG. DE LIC. EN INGENIERIA AGROFORESTAL',
                type: 'Programa'
            },
            {
                code: '154141',
                name: 'PROG. LIC. EN ING. REC. HIDRICOS AGROPEC',
                type: 'Programa'
            },
            {
                code: '151141',
                name: '	PROGRAMA LICENCIATURA EN CONSTRUCCIONES',
                type: 'Programa'
            },
        ]
    },
    {
        name: 'FAC. ENFERMERIA',
        careers: [
            {
                code: '130091',
                name: 'LICENCIATURA EN ENFERMERIA',
                type: 'Programa'
            },
            {
                code: '190602',
                name: 'LICENCIATURA EN ENFERMERIA(NUE)',
                type: 'Carrera'
            },
            {
                code: '167231',
                name: 'PROG. DESC. TUM ENFERMERIA COMUNITARIA',
                type: 'Programa'
            },
        ]
    },
]