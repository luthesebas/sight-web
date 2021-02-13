import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export default function invert(): OperatorFunction<boolean, boolean> {
    return map((value) => !value);
}
