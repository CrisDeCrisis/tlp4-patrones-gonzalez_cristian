import { IHomework } from "./IHomework";
import { ISubscriber } from "./ISubscriber";

export interface IPublisher {
  subscribe(alumno: ISubscriber): void;
  unsubscribe(alumno: ISubscriber): void;
  publish(tp: IHomework): void;
}
