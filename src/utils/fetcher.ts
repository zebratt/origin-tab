export const fetcher = (options?: RequestInit | undefined) => (url: string) => {
  return fetch(url, options).then((res) => res.json());
};
