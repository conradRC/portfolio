import { ProyectId } from "./ProyectId";

export class Proyect {
  readonly id: ProyectId;
  readonly title: string;
  readonly description: string;
  readonly url: string;

  constructor(id: ProyectId, title: string, description: string, url: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
  }
}