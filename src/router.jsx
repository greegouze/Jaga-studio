import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Gallery from './pages/Gallery';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/artist',
        element: <Artist />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
    ],
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

export default router;
