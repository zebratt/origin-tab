import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { gh_username } from '@/constants';

export function fetchGithubStars<T>(): T {
  const { data } = useSWR(
    `https://api.github.com/users/${gh_username}/starred?per_page=100`,
    fetcher(),
    { suspense: true, dedupingInterval: 3600 * 1000 },
  );

  return data!;
}