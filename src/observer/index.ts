import { Professor } from "./classes/Professor";
import { Student } from "./classes/Student";
import { IHomework } from "./interface/IHomework";

const profesor = new Professor();
const alumno1 = new Student("Juan");
const alumno2 = new Student("Maria");

profesor.subscribe(alumno1);
profesor.subscribe(alumno2);

const tarea1: IHomework = {
  professorName: "Alejandro Sanabria",
  title: "TP1: Patrones de diseño",
  dueDate: "Miércoles 23:59",
};
profesor.publish(tarea1);

profesor.unsubscribe(alumno1);

const tarea2: IHomework = {
  professorName: "Agustin Centurion",
  title: "TP2: Principios SOLID",
  dueDate: "Jueves 14:00",
};
profesor.publish(tarea2);
