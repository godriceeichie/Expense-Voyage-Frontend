import './App.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { Login, Signup } from './pages'
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
