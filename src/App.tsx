import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { TanStackQueryProvider } from "./app/providers/tan-stack-query-provider";

function App() {
  return (
    <TanStackQueryProvider>
      <RouterProvider router={router} />
    </TanStackQueryProvider>
  );
}

export default App;
