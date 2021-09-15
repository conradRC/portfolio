import { proyectHTTPRepository } from "../infrastructure/repositories/proyect.http.repository";
import { proyectJSONRepository } from "../infrastructure/repositories/proyect.data.repository";

export const proyectHTTPService = {
    getProyects: ()=>{
        return proyectHTTPRepository.getProyects();
    }
}

export const proyectJSONService = {
    getProyects: ()=>{
        return proyectJSONRepository.getProyects();
    }
}