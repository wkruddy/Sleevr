import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, NotFoundRoute, useRouterHistory }from 'react-router';
import { createHashHistory } from 'history';

import App from './app';
import StartPage from './components/startPage/startPage';
import DesignArena from './components/designArena/designArena';
import Gallery from './components/gallery/gallery';
import Profile from './components/profile/profile';

// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


const ReactRoute = React.createFactory(Route);
const ReactIndexRoute = React.createFactory(IndexRoute);
const ReactNotFoundRoute = React.createFactory(NotFoundRoute);


// React.render((
//   React.createElement(Router, {location: "history"},
//     ReactRoute({path: "/", component: App},
//       ReactIndexRoute({component: Home}),
//       ReactRoute({name: "about", component: About}),
//       ReactRoute({name: "users", component: Users},
//         ReactRoute({name: "recent-users", path: "recent", component: RecentUsers}),
//         ReactRoute({name: "user", path: "/user/:userId", component: User}),
//         NotFoundRoute({component: UserRouteNotFound})
//       )
//     ),
//     NotFoundRoute({component: NotFound})
//   )
// ), document.body);

const StartPageRoute = ReactRoute({
    path: '/home',
    name: 'startPage',
    component: StartPage
});

const DesignArenaRoute = ReactRoute({
    path: '/design-arena',
    name: 'designArena',
    component: DesignArena
});

const GalleryRoute = ReactRoute({
    path: '/gallery',
    name: 'gallery',
    component: Gallery
});

const ProfileRoute = ReactRoute({
    path: '/profile',
    name: 'profile',
    component: Profile
});

const AppRoute = ReactRoute({
    path: '/',
    name: 'app',
    component: App
},  ReactIndexRoute({ component: StartPage }),
    DesignArenaRoute,
    GalleryRoute,
    ProfileRoute
);

(() => ReactDOM.render(
    React.createElement(Router, { history: appHistory }, AppRoute), document.getElementById('sleevr')
))();
