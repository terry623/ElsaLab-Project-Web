import Loadable from 'react-loadable';
import React from 'react';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('../route/Home'),
  loading: Loading,
});

const Project = Loadable({
  loader: () => import('../route/Project'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('../route/About'),
  loading: Loading,
});

export { Home, Project, About };
