import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ForgotPassword, Login, ResetPassword, Signup } from "./pages";
import DashHome from "./pages/dashboard/DashHome";
import { UserDashLayout } from "./layout/index";
import { Toaster } from "react-hot-toast";
import AuthMiddleware from "./middleware/AuthMiddleware";

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth/",
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password/:token", element: <ResetPassword />}
      ],
    },
    {
      path: "/dashboard/home",
      element: (
        <AuthMiddleware>
          <UserDashLayout />
        </AuthMiddleware>
      ),
      children: [
        {
          index: true,
          element: <DashHome />,
        },
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
