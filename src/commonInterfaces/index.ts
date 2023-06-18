interface IField {
    value: string;
    type: 'text' | 'number' | 'date' ;
    label: string;
}

export interface ICategory {
    id: number;
    name: string;
    fields: IField[];
}