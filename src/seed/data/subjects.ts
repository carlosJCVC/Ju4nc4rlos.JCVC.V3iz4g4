export interface Subject {
    code: string;
    name: string;
    type: SubjectType,
    isElective: boolean
}

type SubjectType = 'REGULAR'|'TALLER DE TITULACION';
