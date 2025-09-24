import { IPublisher } from "../interface/IPublisher";
import { ISubscriber } from "../interface/ISubscriber";
import { IHomework } from "../interface/IHomework";

export class Professor implements IPublisher {
  constructor(
    private name: string,
    private alumnos: ISubscriber[] = [],
    private trabajosPracticos: IHomework[] = []
  ) {}

  subscribe(alumno: ISubscriber): void {
    this.alumnos.push(alumno);
  }

  unsubscribe(alumno: ISubscriber): void {
    this.alumnos = this.alumnos.filter((alu) => alu !== alumno);
  }

  publish(trabajoPractico: IHomework): void {
    this.trabajosPracticos.push(trabajoPractico);
    console.log(
      `[${this.name}] Publicó: ${trabajoPractico.title} - entrega ${trabajoPractico.dueDate}.`
    );
    this.notificationStudents(trabajoPractico);
  }

  private notificationStudents(nuevoPractico: IHomework): void {
    this.alumnos.forEach((alu) => alu.update(nuevoPractico));
  }
}
