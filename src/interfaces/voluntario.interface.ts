

export interface Voluntarios {
    voluntarios: Voluntario[];
    pagination:  Pagination;
}

export interface Pagination {
    count: number;
    pages: number;
}

export interface Voluntario {
    id:             string;
    nombre:         string;
    apellidos:      string;
    contacto:       string;
    disponibilidad: string[];
    isPrecursor:    boolean;
    congregacion:   string;
}
