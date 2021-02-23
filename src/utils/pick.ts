export default function pick<T, K extends keyof T>(target: T, keys: K[]): Partial<T> {
  return keys.reduce<Partial<T>>((acc, cur) => {
    acc[cur] = target[cur];

    return acc;
  }, {});
}