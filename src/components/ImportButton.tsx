import { Import } from "lucide-react";
import { Character } from "../models/Character";

const ImportButton: React.FC = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const newCharacters: Character[] = JSON.parse(reader.result as string);

        const storedCharacters: Character[] = JSON.parse(
          localStorage.getItem("characters") || "[]"
        );

        const updatedCharacters: Character[] = [...storedCharacters];
        let changesMade = false;

        newCharacters.forEach((newCharacter) => {
          const existingCharacterIndex = storedCharacters.findIndex(
            (character) => character.name === newCharacter.name
          );

          if (existingCharacterIndex !== -1) {
            const userConfirmed = window.confirm(
              `Já existe um boneco chamado "${newCharacter.name}". Você deseja substituí-lo?`
            );

            if (userConfirmed) {
              updatedCharacters[existingCharacterIndex] = newCharacter;
              changesMade = true;
            }
          } else {
            updatedCharacters.push(newCharacter);
            changesMade = true;
          }
        });

        // Se houve alterações, atualiza o localStorage
        if (changesMade) {
          localStorage.setItem("characters", JSON.stringify(updatedCharacters));
          alert("Personagens importados com sucesso!");
        } else {
          alert("Nenhuma alteração realizada.");
        }
      } catch (error) {
        alert("Erro ao processar o arquivo JSON.");
        console.log(error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <button
      className="bg-primaryLight dark:bg-primaryDark flex flex-col items-center justify-center w-[55%] h-[25%] rounded-4xl cursor-pointer"
      onClick={() => document.getElementById("file-input")?.click()}
    >
      <Import size={100} />
      <p className="text-[1.2rem] font-bold">Importar</p>
      <input
        id="file-input"
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="hidden"
      />
    </button>
  );
};

export default ImportButton;
