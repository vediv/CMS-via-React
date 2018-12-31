import React from 'react';
import Loadable from 'react-loadable';

import DefaultLayout from './Dashboard';

function Loading() {
  return <div>Loading...</div>;
}

const video = Loadable({
  loader: () => import('./video'),
  loading: Loading,
});

const email = Loadable({
  loader: () => import('./email'),
  loading: Loading,
});

const userList = Loadable({
  loader: () => import('./userlist'),
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
  loader: () => import('./charts'),
  loading: Loading,
});
const Uxcore = Loadable({
  loader: () => import('./uxcore'),
  loading: Loading,
});
const Vod = Loadable({
  loader: () => import('./videoondemand'),
  loading: Loading,
});
const Bulk = Loadable({
  loader: () => import('./edit_entry.js'),
  loading: Loading,
});
const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/dashboard', exact:true, name: 'Dashboard', component: MainDashboard },
    { path: '/videoondemand', exact:true, name: 'Video On Demand', component: Vod },
    { path: '/media_content', exact:true,name: 'Bulk Upload', component: Bulk },
    { path: '/media_content/:id/:name', exact:true, component: Bulk },
    { path: '/category', exact:true, name: 'category', component: Categories  },
    { path: '/category/:id', exact:true, name: 'category', component: Categories  },
    { path: '/category/:id/:name', exact:true, name: 'category', component: Categories  },
    { path: '/live', name: 'Live',exact:true, component: Dialog },
    { path: '/plandetail', exact:true, name: 'Plan Details', component: video },
    { path: '/userlist',exact:true, name: 'User List', component: userList },
    { path: '/mail',exact:true, name: 'Mail', component: email },
    { path: '/homesetting', exact:true, name: 'Home Setting', component: Uxcore },
];

export default routes;
