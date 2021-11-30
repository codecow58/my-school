import { ReactLocationDevtools } from "react-location-devtools";
import { Router, Outlet,ReactLocation} from 'react-location'
import { routes } from "..";


const location = new ReactLocation();

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router location={location} routes={routes}>
      <Outlet />
      <ReactLocationDevtools initialIsOpen={false} position="bottom-right" />
    </Router>
  );
};
