import './App.css'

// import DashHome from './pages/dashboard/DashHome'
import {DashHome, AddTrip} from './pages/dashboard'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Gallery, Home,
  DashboardExpenses,
  DashboardTrips,
  DashboardUserProfile,
  ForgotPassword,
  Login,
  ResetPassword,
  Signup,
} from "./pages";
import { Root, UserDashLayout } from "./layout/index";
import { Toaster } from "react-hot-toast";
import AuthMiddleware from "./middleware/AuthMiddleware";
import Landingpage from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth/",
      children: [
        {path:"muna", element: <Landingpage />},
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password/:token", element: <ResetPassword /> },
      ],
    },
    {
      path: '/',
      // <Route element={<Root />} path="/">
      // <Route index element={<Home />} />
    // </Route>
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: '/explore',
      element: <Gallery/>
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
      path: '/',
      element: <Home />
    },
    {
      path: '/explore',
      element: <Gallery/>
    },
    {
      path: "/dashboard/",
      element: (
        <AuthMiddleware>
          <UserDashLayout />
        </AuthMiddleware>
      ),
      children: [
        {
          path: "home",
          element: <DashHome />,
        },
        {
          path: "trips",
          element: <DashboardTrips />,
        },
        {
          path: "expenses",
          element: <DashboardExpenses />,
        },
        {
          path: "settings/profile",
          element: <DashboardUserProfile />,
        },
        {path: 'add-trip', element: <AddTrip/>}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
