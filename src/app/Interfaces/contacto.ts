export interface Contacto {
    Nombre:string;
    Apellidos: string;
    Apodo: string;
    Circulo: string;
    Correo: string;
    Prefijo: string;
    Direccion: direccion;
}


export interface direccion {
    CP: string;
    Calle: string;
    Ciudad: string;
    Estado: string;
    Numero: number;
}