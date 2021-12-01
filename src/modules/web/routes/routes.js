import { Login } from "../auth";
// import ProtectRoute from "./ProtectRoute";
import AboutPage from "../pages/AboutPage";

const routes = [
  { path: "/", element: <Login /> },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

export default routes;
