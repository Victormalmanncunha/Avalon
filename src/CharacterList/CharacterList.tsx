import { ArrowLeft, Download, Trash, UserRoundPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Character } from "../models/Character";

const CharacterList = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const storedCharacters: Character[] = JSON.parse(
      localStorage.getItem("characters") || "[]"
    );

    setCharacters(storedCharacters);
  }, []);

  const donwloadCharacter = (character: Character) => {
    const jsonString = JSON.stringify(character, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = character.name;
    a.click();

    URL.revokeObjectURL(url);
  };

  const deleteCharacter = (characterName: string) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.filter(
        (character) => character.name !== characterName
      );

      localStorage.setItem("characters", JSON.stringify(updatedCharacters));
      return updatedCharacters;
    });
  };

  const downloadAllCharacters = () => {
    const jsonString = JSON.stringify(characters, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "characters";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex flex-col items-center justify-between">
      <ArrowLeft
        className="absolute left-0 top-0 text-textLight dark:text-textDark cursor-pointer"
        size={60}
        onClick={() => navigate("/")}
      />
      <div className="w-full h-auto flex items-center flex-col">
        <h1 className="text-4xl text-textLight dark:text-textDark mt-20">
          Personagens
        </h1>
        <div className="flex flex-col w-full items-center mt-10 gap-5 max-h-[60vh] overflow-y-auto">
          {characters.map((value) => {
            return (
              <div
                className="bg-primaryDark w-[80%] p-3 text-2xl rounded-2xl cursor-pointer flex justify-between items-center gap-5"
                onClick={() => navigate(`/characters/${value.name}`)}
              >
                <p className="truncate">{value.name}</p>
                <div className="flex items-center gap-5">
                  <Download
                    size={30}
                    onClick={(e) => {
                      e.stopPropagation();
                      donwloadCharacter(value);
                    }}
                  />
                  <Trash
                    size={30}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCharacter(value.name);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-10 h-fit flex gap-10">
        <button
          className="bg-primaryLight dark:bg-primaryDark text-2xl p-5 rounded-4xl flex items-center cursor-pointer ml-5"
          onClick={() => navigate("/characters/new")}
        >
          <UserRoundPlus size={40} />
          Criar personagem
        </button>
        <button
          className="bg-primaryLight dark:bg-primaryDark text-2xl p-5 rounded-4xl flex items-center cursor-pointer mr-5"
          onClick={() => downloadAllCharacters()}
        >
          <Download size={40} />
          Baixar personagens
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
