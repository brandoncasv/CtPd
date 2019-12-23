export interface Contacto {
    Nombre:string;
    Apellidos: string;
    Apodo: string;
    Circulo: string;
    Correo: string;
    Prefijo: string;
    id: string;
}
export interface Direccion {
    CP: string;
    Calle: string;
    Ciudad: string;
    Estado: string;
    Numero: number;
    id: string;
    id_Contacto: string;
}
export interface Telefono {
    Telefono: number;
    id_Contacto: string;
    tipo_Telefono: string;
    id: string;
}

export interface Fecha {
    Descripcion: string,
    id_Contacto:string,
    Fecha: string,
    tipo_Fecha: string,
    id: string,
}



export interface Contact {
    Nombre:string;
    Apellidos: string;
    Apodo: string;
    Circulo: string;
    Correo: string;
    Prefijo: string;
}
export interface address {
    CP: string;
    Calle: string;
    Ciudad: string;
    Estado: string;
    Numero: number;
    id_Contacto: string;
}
export interface cell {
    Telefono: number;
    id_Contacto: string;
    tipo_Telefono: string;
}
