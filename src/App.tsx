import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import { ThemeProvider } from "./context/ThemeContext";
import Characters from "./Characters/Characters";
import CharacterCreate from "./CharacterCreate/CharacterCreate";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/characters", element: <Characters /> },
  { path: "/characters/create", element: <CharacterCreate /> },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
