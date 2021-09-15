import { ProyectId } from "../../domain/ProyectId";
export interface ProyectDTO {
    'proyect_id': ProyectId,
    title: string,
    description: string,
    url: string,
}