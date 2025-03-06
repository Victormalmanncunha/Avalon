import { Character } from "../../models/Character";

interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
  editingMode: boolean;
}

const InventoryTab: React.FC<MainTabProps> = ({
  character,
  setCharacter,
  editingMode,
}) => {
  const changeInventory = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inventory = e.target.value;
    character.inventory = inventory;
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-textLight dark:text-textDark">
        Inventário
      </h1>
      {editingMode ? (
        <textarea
          className="w-full h-96 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
          placeholder="Anote seus itens aqui..."
          onChange={changeInventory}
          value={character.inventory}
        ></textarea>
      ) : (
        <div className="w-full h-96 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm overflow-y-auto">
          {character.inventory ? (
            <p className="whitespace-pre-wrap">{character.inventory}</p>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              Nenhum item anotado.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InventoryTab;
