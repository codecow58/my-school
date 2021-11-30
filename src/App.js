import { BrowserView, MobileView } from "react-device-detect";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </>
  );
};
