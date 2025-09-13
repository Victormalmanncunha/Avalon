import { Character } from "../../models/Character";

interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
  editingMode: boolean;
}

const PowersTab: React.FC<MainTabProps> = ({
  character,
  setCharacter,
  editingMode,
}) => {
  const changePowers = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const powers = e.target.value;
    character.powers = powers;
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-textLight dark:text-textDark">
        Habilidades
      </h1>
      {editingMode ? (
        <textarea
          className="w-full h-96 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
          placeholder="Faça suas anotações aqui..."
          onChange={changePowers}
          value={character.powers}
        ></textarea>
      ) : (
        <div className="w-full h-96 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm overflow-y-auto">
          {character.powers ? (
            <p className="whitespace-pre-wrap">{character.powers}</p>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Nada Anotado.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PowersTab;
