import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Character } from "../models/Character";

const CharacterNew = () => {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = useState("");

  const createCharacter = (): void => {
    if(characterName.trim().length === 0) return
    try {
      const storedCharacters: Character[] = JSON.parse(
        localStorage.getItem("characters") || "[]"
      );

      if (storedCharacters.some(({ name }) => name === characterName)) {
        console.warn(`O personagem "${characterName}" já existe.`);
        return;
      }

      storedCharacters.push(new Character(characterName));
      localStorage.setItem("characters", JSON.stringify(storedCharacters));
      console.log(storedCharacters);

      console.log(`Personagem "${characterName}" criado com sucesso!`);
        navigate(`/characters/${characterName}`);
    } catch (error) {
      console.error("Erro ao manipular personagens no localStorage:", error);
    }
  };

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex justify-center items-center flex-col gap-10">
      <ArrowLeft
        className="absolute left-0 top-0 text-textLight dark:text-textDark cursor-pointer"
        size={60}
        onClick={() => navigate(-1)}
      />
      <label
        htmlFor="nome"
        className="text-textLight dark:text-textDark text-2xl"
      >
        Nome do personagem:
      </label>
      <input
        type="text"
        id="nome"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        className="border-[3px] border-textLight dark:border-textDark text-2xl text-textLight dark:text-textDark rounded-2xl p-2"
      />
      <button
        className="bg-primaryLight dark:bg-primaryDark text-2xl p-3 pl-10 pr-10 rounded-4xl flex items-center cursor-pointer"
        onClick={() => createCharacter()}
      >
        Criar
      </button>
    </div>
  );
};

export default CharacterNew;
