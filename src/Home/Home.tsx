import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, UserRound, Import } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImportButton from "../components/ImportButton";

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex flex-col justify-center items-center gap-16">
      {isDarkMode ? (
        <Sun
          className="text-textLight dark:text-textDark absolute left-[1%] top-[1%]"
          size={40}
          onClick={() => toggleTheme()}
        />
      ) : (
        <Moon
          className="text-textLight dark:text-textDark absolute left-[1%] top-[1%]"
          size={40}
          onClick={() => toggleTheme()}
        />
      )}

      <h1 className="text-5xl text-textLight dark:text-textDark">
        Forja das fichas
      </h1>

      <button
        className="bg-primaryLight dark:bg-primaryDark flex flex-col items-center justify-center w-[55%] h-[25%] rounded-4xl cursor-pointer"
        onClick={() => navigate("/characters/list")}
      >
        <UserRound size={100} />
        <p className="text-[1.2rem] font-bold">Personagens</p>
      </button>
      <ImportButton />
    </div>
  );
};

export default Home;
