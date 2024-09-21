import './App.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { Gallery, Home, Login, Signup } from './pages'
import DashHome from './pages/dashboard/DashHome'
import { UserDashLayout } from './layout/index'
import { Toaster } from 'react-hot-toast'
import Landingpage from './pages/Home'

function App() {
  const router = createBrowserRouter(
   [
    {
      path: '/auth/',
      children: [
        {path:"muna", element: <Landingpage />},
        {path:"login", element: <Login />},
        {path:"signup", element: <Signup />}
      ]
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/explore',
      element: <Gallery/>
    },
    {
      path: '/dashboard/home', element: <UserDashLayout/>,
      children: [
        {
          index: true, element: <DashHome/>
        }
      ]
    }
   ]
  )

  return (
    <>
      <RouterProvider router={router}/>
      <Toaster />
    </>
  )
}

export default App
