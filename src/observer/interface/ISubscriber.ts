import { IHomework } from "./IHomework";

// update
export interface ISubscriber {
  update(nuevoPractico: IHomework): void;
}
