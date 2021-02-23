import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

export function fetchGithubStars<T>(): T {
  const { data } = useSWR(
    '//api.github.com/users/zebratt/starred?per_page=100',
    fetcher(),
    { suspense: true, dedupingInterval: 3600 * 1000 },
  );

  return data!;
}