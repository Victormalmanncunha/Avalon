import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Main = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-full h-full">
      {isDarkMode ? (
        <Sun
          className="text-textLight dark:text-textDark"
          size={40}
          onClick={() => toggleTheme()}
        />
      ) : (
        <Moon
          className="text-textLight dark:text-textDark"
          size={40}
          onClick={() => toggleTheme()}
        />
      )}
    </div>
  );
};

export default Main;
