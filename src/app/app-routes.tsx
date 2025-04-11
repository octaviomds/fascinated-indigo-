import { redirect } from 'react-router-dom';
import Home from './home/home';
import { routes as homeRoute } from './home/home-routes';
import InApp from './in-app/in-app';
import { routes as inAppRoute } from './in-app/in-app-routes';

export const routes = [
  { index: true, loader: () => redirect('home') },
  { path: 'home', element: <Home />, text: 'Home', children: homeRoute },
  { path: 'in-app', element: <InApp />, text: 'In-App', children: inAppRoute }
];
