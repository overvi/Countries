import { createBrowserRouter } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:country/details", element: <Details /> },
  { path: "/notfound", element: <NotFound /> },
]);

export default router;
