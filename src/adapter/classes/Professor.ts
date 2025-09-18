import { IPublisher } from "../interface/IPublisher";
import { ISubscriber } from "../interface/ISubscriber";

export class Professor implements IPublisher {
  private alumnos: ISubscriber[] = [];
  private trabajosPracticos: string[] = [];

  subscribe(alumno: ISubscriber): void {
    this.alumnos.push(alumno);
  }

  unsubscribe(alumno: ISubscriber): void {
    this.alumnos = this.alumnos.filter((alu) => alu !== alumno);
  }

  publish(trabajoPractico: string): void {
    this.trabajosPracticos.push(trabajoPractico);
    this.notificationStudents();
  }

  private notificationStudents(): void {
    this.alumnos.forEach((alu) => alu.update(this.trabajosPracticos));
  }
}
