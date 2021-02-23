import React from 'react'
import { useRoutes } from 'react-router';
import GithubStarsPage from './pages/github-stars';
import HomePage from './pages/home';
import pick from './utils/pick';

export const routeConfig = [
  {
    title: 'home',
    path: '/',
    element: <HomePage />,
  },
  {
    title: 'Github Stars',
    path: '/github-stars',
    element: <GithubStarsPage />
  }
];

export function RouterContainer() {
  return useRoutes(routeConfig.map((item) => pick(item, ['element', 'path'])));
}
