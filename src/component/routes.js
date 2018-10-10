import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './Dashboard';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./Page404'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('./Page500'),
  loading: Loading,
});

const Carousels = Loadable({
  loader: () => import('./Carousels'),
  loading: Loading,
});

const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Carousels },
  { path: '/colors', name: 'Colors', component: Colors },
    { path: '/carousels', name: 'Carousel', component: Dashboard },
];

export default routes;
