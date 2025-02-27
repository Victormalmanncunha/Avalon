import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Character } from "../models/Character";
import MainTab from "../components/Tabs/MainTab";
import { ArrowLeft, Check, Edit, Menu } from "lucide-react";
import AttributeTab from "../components/Tabs/AttributeTab";
import SkillsTab from "../components/Tabs/SkillsTab";

const CharacterView = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const [chosenTab, setChosenTab] = useState<string>("main");
  const [editingMode, setEditingMode] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const saveEdit = () => {
    console.log(character);
    const skillsArray = Object.entries(character.skills)
      .filter(([key]) => key !== "autoCalc") // Remove o autoCalc
      .map(([, value]) => value) // Pega apenas os valores dos objetos
      .sort((a, b) => a.portugueseName.localeCompare(b.portugueseName)); // Ordena pelo nome em português

    console.log(skillsArray);

    const storedCharacters: Character[] = JSON.parse(
      localStorage.getItem("characters") || "[]"
    );

    if (character?.name !== params.name) {
      if (storedCharacters.some(({ name }) => name === character?.name)) {
        console.warn(`Já existe um personagem com o mesmo nome.`);
        return;
      }
    }

    const updatedCharacters = storedCharacters.map((value) => {
      if (value.name === params.name) {
        return { ...character };
      }
      return value;
    });

    localStorage.setItem("characters", JSON.stringify(updatedCharacters));
    if (params.name !== character?.name) {
      navigate(`/characters/${character?.name}`);
    }
    setEditingMode(false);
  };

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex items-center justify-between">
      {!editingMode && (
        <Edit
          className="absolute top-0 right-0 text-textLight dark:text-textDark cursor-pointer"
          size={40}
          onClick={() => {
            setEditingMode(!editingMode);
          }}
        />
      )}

      {editingMode && (
        <Check
          className="absolute top-0 right-0 text-textLight dark:text-textDark cursor-pointer"
          size={40}
          onClick={() => saveEdit()}
        />
      )}

      {!menuOpen && (
        <Menu
          className="absolute top-0 text-textLight dark:text-textDark cursor-pointer"
          size={40}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
      {menuOpen && (
        <ArrowLeft
          className="absolute top-0 text-textLight dark:text-textDark cursor-pointer"
          size={40}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
      <nav
        ref={menuRef}
        className={`flex h-full flex-col border-r-2 border-primaryDark justify-center transition-all duration-300 overflow-hidden shrink-0 ${
          !menuOpen ? "w-0 opacity-0" : "w-[30%] opacity-100"
        }`}
        style={{
          transition: "width 0.3s ease-in-out, opacity 0.2s ease-in-out",
        }}
      >
        <button
          className={`border-primaryDark text-textLight dark:text-textDark w-full h-10 ${
            chosenTab === "main" ? "bg-primaryDark" : ""
          } cursor-pointer`}
          onClick={() => setChosenTab("main")}
        >
          Geral
        </button>
        <button
          className={`border-primaryDark text-textLight dark:text-textDark w-full h-10 ${
            chosenTab === "attributes" ? "bg-primaryDark" : ""
          } cursor-pointer`}
          onClick={() => setChosenTab("attributes")}
        >
          Atributos
        </button>
        <button
          className={`border-primaryDark text-textLight dark:text-textDark w-full h-10 ${
            chosenTab === "skills" ? "bg-primaryDark" : ""
          } cursor-pointer`}
          onClick={() => setChosenTab("skills")}
        >
          Perícias
        </button>
      </nav>

      <div className="flex-grow flex justify-center items-center">
        {chosenTab === "main" && character && (
          <MainTab
            character={character}
            setCharacter={setCharacter}
            editingMode={editingMode}
          />
        )}
        {chosenTab === "attributes" && character && (
          <AttributeTab
            character={character}
            setCharacter={setCharacter}
            editingMode={editingMode}
          />
        )}
        {chosenTab === "skills" && character && (
          <SkillsTab
            character={character}
            setCharacter={setCharacter}
            editingMode={editingMode}
          />
        )}
      </div>
    </div>
  );
};

export default CharacterView;
