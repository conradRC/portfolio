import { http } from "../../../Shared/infrastructure/http/http"
import { Proyect } from "../../domain/Proyect"
import { ProyectDTO } from "../dto/proyect.dto"
import { base } from "../../../../config/base"
export const proyectHTTPRepository = {
    getProyects: async () => {
        const proyects = await http.get<ProyectDTO[]>(base.URL_PROYECTS)

        return proyects.map((proyectDto): Proyect => ({
            id: proyectDto.proyect_id,
            title: proyectDto.title,
            description: proyectDto.description,
            url: proyectDto.url,
        }))
    }
}