import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

export function fetchJuejinArticles() {
  const { data } = useSWR(
    '//e.juejin.cn/resources/gold',
    fetcher({
      method: 'POST',
      body: JSON.stringify({
        category: 'frontend',
        order: 'heat',
        offset: 0,
        limit: 30,
      }),
    }),
    { suspense: true },
  );

  return data;
}
