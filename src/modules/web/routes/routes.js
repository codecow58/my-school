import { Login } from "../auth";
import ProtectRoute from "./ProtectRoute";

const routes = [
  { path: "/", element: <Login /> },
  {
    path: "/about",
    element: (
      <ProtectRoute>
        <>hi</>
      </ProtectRoute>
    ),
  },
];

export default routes;
