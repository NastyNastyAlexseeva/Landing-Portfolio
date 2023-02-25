import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Admin from "./Pages/Admin";

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createHashRouter([
  {
    path: "/", // позже настроить
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
], {basename: '/'});

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
