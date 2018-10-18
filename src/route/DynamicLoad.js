import Loadable from 'react-loadable';
import React from 'react';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

const Project = Loadable({
  loader: () => import('./Project'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./About'),
  loading: Loading,
});

export { Home, Project, About };
