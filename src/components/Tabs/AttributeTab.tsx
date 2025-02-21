interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
  editingMode: boolean;
}

const AttributeTab: React.FC<MainTabProps> = ({
  character,
  setCharacter,
  editingMode,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-6">
      <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
        Atributos
      </h2>
    </div>
  );
};

export default AttributeTab;
