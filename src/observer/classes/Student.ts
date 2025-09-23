import { IHomework } from "../interface/IHomework";
import { ISubscriber } from "../interface/ISubscriber";

export class Student implements ISubscriber {
  constructor(private nameStudent: string) {}

  update(nuevoPractico: IHomework): void {
    console.log(
      `[${this.nameStudent}] Nueva notificación: ${nuevoPractico.title} - entrega ${nuevoPractico.dueDate}`
    );
  }
}
