import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import App from "../Pages/App/App";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Components/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          new Promise((resolve) => setTimeout(() => resolve({}), 500)), // optional: loader for Home
      },
      {
        path: "/App",
        loader: () => fetch("/Data.json"),
        element: <App />,
      },
      {
        path: "/Installation",
        loader: () => fetch("/Data.json"),
        element: <Installation />,
      },
      {
        path: "/AppDetails/:id",
        loader: () => fetch("/Data.json"),
        element: <AppDetails />,
      },
    ],
  },
]);
