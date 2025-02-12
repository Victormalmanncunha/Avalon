import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import { ThemeProvider } from "./context/ThemeContext";
import Characters from "./Characters/Characters";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/characters", element: <Characters /> },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
