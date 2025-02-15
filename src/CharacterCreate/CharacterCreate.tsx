import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Character } from "../models/Character";

const CharacterCreate = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const createCharacter = () => {
    const character = new Character(name);
    character.abilities.strength.score = 20;
    character.updateModifiers();
    character.level = 17;
    character.updateProficiencyBonus();
    character.savingThrows.strength.proficient = true;
    character.updateSavingThrows();
    console.log(character.savingThrows.strength.bonus);
  };

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex justify-center items-center flex-col gap-10">
      <ArrowLeft
        className="absolute left-0 top-0 text-textLight dark:text-textDark"
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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

export default CharacterCreate;
