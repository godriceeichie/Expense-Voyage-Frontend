import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Root } from './layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<Root />}/>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
