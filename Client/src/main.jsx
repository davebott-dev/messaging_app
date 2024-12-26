import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Index from './Index';
import Login from './routes/Login';
import Root from './routes/Root';
import Signup from './routes/Signup';
import Profile from './routes/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Index/>,
      },
    ]
  },
  {
    path: '/login',
    element:<Login/>,
  },
  {
    path: '/signup',
    element: <Signup/>,
  },
  {
    path:'/profile/:profileId',
    element: <Profile/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
