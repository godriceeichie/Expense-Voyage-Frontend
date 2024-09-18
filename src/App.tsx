import './App.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { Login, Signup } from './pages'
import Landingpage from './pages/landingpage/landingpage'

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
    }
   ]
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
