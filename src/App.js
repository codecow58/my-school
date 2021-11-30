import { UserContextProvider } from "./context";
import { WebRoot } from "./modules/web";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <WebRoot />
      </UserContextProvider>
    </QueryClientProvider>
  );
};
