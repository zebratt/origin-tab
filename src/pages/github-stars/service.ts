import { Octokit } from '@octokit/core';
import useSWR from 'swr';
import { gh_token } from '@/constants';
import { SWRKey } from '@/constants/swr-keys';

const octokit = new Octokit({
  auth: gh_token,
});

export function fetchGithubStars() {
  const { data } = useSWR(
    SWRKey.GITHUB_STARS,
    () =>
      octokit.request('GET /user/starred', {
        per_page: 100,
      }),
    { suspense: true, dedupingInterval: 60000 },
  );

  return data!;
}

export function fetchGithubUser() {
  const { data } = useSWR(
    SWRKey.GITHUB_USER_INFO,
    () => octokit.request('GET /user'),
    { suspense: true, dedupingInterval: 60000 },
  );

  return data!;
}
