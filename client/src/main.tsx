import ReactDOM from 'react-dom/client';
// import ViewProfile from './pages/ViewProfile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import SignIn from './pages/SignUp.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SearchLibrary from './pages/SearchLibrary.tsx';
import ViewProfile from './pages/ViewProfile.tsx';
import Movies from './pages/SearchMovies.tsx';

//todo add pages and path
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <ViewProfile />,
      },
      {
        path: 'SignUp',
        element: <SignIn/>,
      },
      {
        path:'/search-movies',
        element:<Movies/>
      },
      {
        path: '/search-library',
        element: <SearchLibrary/>,
      },
      
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
