import { json_data } from "../../../Shared/infrastructure/data/json.data"
import { Proyect } from "../../domain/Proyect"
import { ProyectDTO } from "../dto/proyect.dto"
export const proyectJSONRepository = {
    getProyects: () => {
        const proyects = json_data.get<ProyectDTO[]>()
        
        return proyects.map((proyectDto): Proyect => ({
            id: proyectDto.proyect_id,
            title: proyectDto.title,
            description: proyectDto.description,
            url: proyectDto.url,
        }))
    }
}