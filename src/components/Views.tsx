import { createBrowserRouter } from 'react-router-dom';

import Login from './Login/Login';
import SignUp from './Login/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <Login />,
  },
]);
