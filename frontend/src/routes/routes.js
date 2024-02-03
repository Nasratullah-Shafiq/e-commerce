import React from 'react';
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';


const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/Dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/Profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;