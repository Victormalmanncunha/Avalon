import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([{ path: "/", element: <Main /> }]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
