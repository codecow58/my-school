import { BrowserView, MobileView } from "react-device-detect";
import { auth } from "./firebase";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  console.log(auth);
  return (
    <>
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>Under Construction</h1>
      </MobileView>
    </>
  );
};
