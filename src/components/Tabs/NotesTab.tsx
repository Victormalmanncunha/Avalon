import { Character } from "../../models/Character";

interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
  editingMode: boolean;
}

const NotesTab: React.FC<MainTabProps> = ({
  character,
  setCharacter,
  editingMode,
}) => {
  const changeNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const notes = e.target.value;
    character.notes = notes;
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-textLight dark:text-textDark">
        Anotações
      </h1>
      {editingMode ? (
        <textarea
          className="w-full h-96 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
          placeholder="Faça suas anotações aqui..."
          onChange={changeNotes}
          value={character.notes}
        ></textarea>
      ) : (
        <div className="w-full h-96 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm overflow-y-auto">
          {character.notes ? (
            <p className="whitespace-pre-wrap">{character.notes}</p>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Nada Anotado.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotesTab;
