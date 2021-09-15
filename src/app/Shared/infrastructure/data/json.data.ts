import { proyectsList } from "./proyectsList.json"

const get = <T>() => {
    return proyectsList as unknown as T
}

export const json_data = {
    get
}