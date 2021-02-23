import React from 'react';
import type { StarredRepoItem } from './interface';
import { fetchGithubStars } from './service';

interface RepoItemProps {
  name: string;
  html_url: string;
  stargazers_count: number;
  description: string | null;
  author: string;
}

const RepoItem = (props: RepoItemProps) => {
  const { name, html_url, description, author, stargazers_count } = props;

  return (
    <div className="border rounded border-grey-2 mb-2 flex text-xs">
      <div className="w-1/5 pl-4">
        <a className="text-blue-500" target="_blank" href={html_url}>
          {name}
        </a>
      </div>
      <div className="flex-1">{description}</div>
      <div className="w-32">{author}</div>
      <div className="w-16">{stargazers_count}</div>
    </div>
  );
};

const GithubStarsPage = () => {
  const data = fetchGithubStars<StarredRepoItem[]>();

  return (
    <div>
      {data.map((ele, idx) => {
        return (
          <RepoItem
            key={idx}
            name={ele.name}
            html_url={ele.html_url}
            description={ele.description}
            stargazers_count={ele.stargazers_count}
            author={ele.owner?.login ?? 'unknown'}
          />
        );
      })}
    </div>
  );
};

export default GithubStarsPage;
