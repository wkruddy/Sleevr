import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, DefaultRoute, NotFoundRoute, useRouterHistory }from 'react-router';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

// import App from './app';
import StartPage from './components/startPage/startPage';


const ReactRoute = React.createFactory(Route);
const ReactDefaultRoute = React.createFactory(DefaultRoute);
const ReactNotFoundRoute = React.createFactory(NotFoundRoute);


// React.render((
//   React.createElement(Router, {location: "history"},
//     Route({path: "/", handler: App},
//       DefaultRoute({handler: Home}),
//       Route({name: "about", handler: About}),
//       Route({name: "users", handler: Users},
//         Route({name: "recent-users", path: "recent", handler: RecentUsers}),
//         Route({name: "user", path: "/user/:userId", handler: User}),
//         NotFoundRoute({handler: UserRouteNotFound})
//       )
//     ),
//     NotFoundRoute({handler: NotFound})
//   )
// ), document.body);

// const StartPageRoute = ReactRoute({
//   name: 'startPage',
//   component: StartPage
// });

// const AppRoute = ReactRoute({
//   path: '/',
//   name: 'app',
//   component: App
// }, StartPageRoute);

const AppRoute = ReactRoute({
  path: '/',
  name: 'app',
  component: StartPage
});


// (() => ReactDOM.render(
//     React.createElement(Router, {history: appHistory}, AppRoute), document.getElementById('sleevr')
// ))();

const Routes = React.createElement(Router, {history: appHistory}, AppRoute);

export default Routes;
