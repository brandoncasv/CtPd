import { DocumentChangeType, DocumentReference, DocumentData } from "@angular/fire/firestore";
import SnapshotMetadata = firebase.firestore.SnapshotMetadata;

export interface Contacto {
    Nombre:string;
    Apellidos: string;
    Apodo: string;
    Circulo: string;
    Correo: string;
    Prefijo: string;
    id: string;
}
export interface Contact {
    Nombre:string;
    Apellidos: string;
    Apodo: string;
    Circulo: string;
    Correo: string;
    Prefijo: string;
    documentChange: DocumentChange,
    documentSnapshot: DocumentSnapshot,
    documentChangeAction: DocumentChangeAction
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

interface DocumentChange {
    type: DocumentChangeType;
    doc: DocumentSnapshot;
    oldIndex: number;
    newIndex: number;
}

interface DocumentSnapshot {
    exists: boolean;
    ref: DocumentReference;
    id: string;
    metadata: SnapshotMetadata;
    data(): DocumentData;
    get(fieldPath: string): any;
}
interface DocumentChangeAction {
    //'added' | 'modified' | 'removed';
    type: DocumentChangeType;
    payload: DocumentChange;
}