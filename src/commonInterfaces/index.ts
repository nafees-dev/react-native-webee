interface IField {
    value: string;
    type: 'text' | 'number' | 'date' | 'checkbox' ;
    label: string;
}

export interface ICategory {
    id: number;
    name: string;
    fields: IField[];
}
