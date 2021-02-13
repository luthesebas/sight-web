import { Equalizer, Combiner } from "./model-util";


export function find<T>(search: T, values: T[], equals: Equalizer<T>): T | null {
  return values.find(value => equals(search, value)) || null;
}

export function findAll<T>(searches: T[], values: T[], equals: Equalizer<T>): T[] {
  return intersectionOf(searches, values, equals);
}

export function excluding<T>(exclusion: T, values: T[], equals: Equalizer<T>): T[] {
  return values.filter(value => !equals(exclusion, value)) || [];
}

export function excludingAll<T>(exclusions: T[], values: T[], equals: Equalizer<T>): T[] {
  return values.filter(value => !find(value, exclusions, equals)) || [];
}

export function intersectionOf<T>(searchs: T[], values: T[], equals: Equalizer<T>): T[] {
  return values.filter(value => find(value, searchs, equals) != null) || [];
}

export function combinationsOf<M, N, R>(x: M[], y: N[], combine: Combiner<M, N, R>): R[] {
  const allCombinations: R[] = [];
  x.forEach(leftValue => {
      y.forEach(rightValue => {
          allCombinations.push(combine(leftValue, rightValue));
      })
  });
  return allCombinations;
}
