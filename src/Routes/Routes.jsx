import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateCoverPage from "../Pages/CreateCoverPage/CreateCoverPage";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create/cover-page",
        element: <CreateCoverPage />,
      },
      {
        path: "/create/assignment",
        element: <CreateAssignment />,
      },
    ],
  },
]);

export default router;
