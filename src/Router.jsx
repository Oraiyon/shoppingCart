import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import Home from "./Home/Home";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <ShoppingCart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
