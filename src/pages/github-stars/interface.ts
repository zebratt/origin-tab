export interface StarredRepoItem {
  name: string;
  html_url: string;
  stargazers_count: number;
  description: string | null;
  owner: {
    login: string
  }
}