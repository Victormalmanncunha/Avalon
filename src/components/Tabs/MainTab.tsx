import { Character } from "../../models/Character";

interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
}

const MainTab: React.FC<MainTabProps> = ({ character, setCharacter }) => {

  const changeLevel = (e): void => {
    const updatedCharacter = Object.assign(new Character(character.name), character)
    if(e.target.value < 1 || e.target.value > 30) return
    updatedCharacter.level = e.target.value
    console.log(updatedCharacter.level)
    setCharacter(updatedCharacter)
  }

  return <div className="w-full h-full flex flex-col items-center">
  <p className="text-textLight dark:text-textDark">Nome: {character.name} level: <input type="number" min={1} max={30} value={character.level} onChange={(e) => changeLevel(e)}/></p>
  </div>;
};

export default MainTab;
