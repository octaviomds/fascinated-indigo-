import { redirect } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Acces from './acces/acces';
import Contact from './contact/contact';
import Chauffeur from './chauffeur/chauffeur';
import Covoiturage from './covoiturage/covoiturage';

export const routes = [
  { index: true, loader: () => redirect('dashboard') },
  { path: 'dashboard', element: <Dashboard />, text: 'Dashboard' },
  { path: 'acces', element: <Acces />, text: 'Acces' },
  { path: 'contact', element: <Contact />, text: 'contact' },
  { path: 'chauffeur', element: <Chauffeur />, text: 'Chauffeur' },
  { path: 'covoiturage', element: <Covoiturage />, text: 'Covoiturage' }
];
