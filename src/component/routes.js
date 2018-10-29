import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './Dashboard';

function Loading() {
  return <div>Loading...</div>;
}

const video = Loadable({
  loader: () => import('./video'),
  loading: Loading,
});

const chart = Loadable({
  loader: () => import('./charts'),
  loading: Loading,
});



const MainDashboard = Loadable({
  loader: () => import('./MainDashboard'),
  loading: Loading,
});

const Categories = Loadable({
  loader: () => import('./categories'),
  loading: Loading,
});
const Dialog = Loadable({
  loader: () => import('./dialog'),
  loading: Loading,
});

const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: MainDashboard },
  { path: '/category', name: 'category', component: Categories  },
      { path: '/live', name: 'Live', component: Dialog },
            { path: '/plandetail', name: 'Plan Details', component: video },
            { path: '/userlist', name: 'User List', component: chart },
];

export default routes;
