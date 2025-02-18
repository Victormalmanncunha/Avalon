import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import { ThemeProvider } from "./context/ThemeContext";
import CharacterList from "./CharacterList/CharacterList";
import CharacterNew from "./CharacterNew/CharacterNew";
import CharacterView from "./CharacterView/CharacterView";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/characters/list", element: <CharacterList /> },
  { path: "/characters/new", element: <CharacterNew /> },
  { path: "/characters/:name", element: <CharacterView /> },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
