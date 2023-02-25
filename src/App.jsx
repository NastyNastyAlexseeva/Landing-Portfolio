import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Admin from "./Pages/Admin";

const router = createBrowserRouter([
  {
    path: "/landing_portfolio", // позже настроить
    element: <Home />,
  },
  {
    path: "landing_portfolio/auth",
    element: <Auth />,
  },
  {
    path: "landing_portfolio/admin",
    element: <Admin />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
