import './App.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { Login, Signup } from './pages'
// import DashHome from './pages/dashboard/DashHome'
import {DashHome, AddTrip} from './pages/dashboard'
import { UserDashLayout } from './layout/index'
import { Toaster } from 'react-hot-toast'

function App() {
  const router = createBrowserRouter(
   [
    {
      path: '/auth/',
      children: [
        {path:"login", element: <Login />},
        {path:"signup", element: <Signup />}
      ]
    },
    {
      path: '/dashboard/home', element: <UserDashLayout/>,
      children: [
        {
          index: true, element: <DashHome/>
        },
        {path: 'add-trip', element: <AddTrip/>}
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
