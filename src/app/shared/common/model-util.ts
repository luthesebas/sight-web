export type Comparator<T> = (x: T, y: T) => number;

export type Equalizer<T> = (x: T, y: T) => boolean;

//export type Finder<T> = ((x: T, y: T[]) => T | null) & ((x: T[], y: T[]) => T[]);

export type Combiner<M, N, R> = (x: M, y: N) => R;

export function createComparator<T>(baselineCompare: Comparator<T>): Comparator<T> {
    return (x: T, y: T) => {
        if (x === y || x == y) {
            return 0;
        }
        if (x == null) {
            return -1;
        }
        if (y == null) {
            return 1;
        }
        return baselineCompare(x, y);
    };
}

export function createEqualizer<T>(baselineEquals: Equalizer<T>): Equalizer<T> {
    return (x: T, y: T) => {
        return x === y || (x != null && y != null && baselineEquals(x, y));
    };
}
