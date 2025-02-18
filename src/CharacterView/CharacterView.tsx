import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Character } from "../models/Character";
import MainTab from "../components/Tabs/MainTab";

const CharacterView = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const [chosenTab, setChosenTab] = useState<string>("main");
  useEffect(() => {
    const storedCharacters: Character[] = JSON.parse(
      localStorage.getItem("characters") || "[]"
    );
    const foundCharacter = storedCharacters.filter(
      (character) => character.name === params.name
    );
    if (foundCharacter.length < 1) {
      navigate("/");
    } else {
      setCharacter(
        Object.assign(new Character(foundCharacter[0].name), foundCharacter[0])
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex flex-col items-center justify-between">
      <div className="flex-grow flex justify-center items-center w-full">
        {chosenTab === "main" && character && <MainTab character={character} />}
      </div>
      <nav className="flex w-full">
        <button
          className={`border-primaryDark border-l-2 border-t-2 border-r-2 text-textLight dark:text-textDark w-[33%] h-10 ${
            chosenTab === "main" ? "bg-primaryDark" : ""
          } cursor-pointer`}
          onClick={() => setChosenTab("main")}
        >
          Geral
        </button>
        <button
          className={`border-primaryDark border-l-2 border-t-2 border-r-2 text-textLight dark:text-textDark w-[33%] h-10 ${
            chosenTab === "Attributes" ? "bg-primaryDark" : ""
          } cursor-pointer`}
          onClick={() => setChosenTab("Attributes")}
        >
          Atributos
        </button>
      </nav>
    </div>
  );
};

export default CharacterView;
