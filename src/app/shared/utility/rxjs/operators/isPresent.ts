import { OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";

export default function isPresent<T>(): OperatorFunction<T, boolean> {
  return map(value => (value == null));
}
