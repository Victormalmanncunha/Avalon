import { useState } from "react";
import { Import } from "lucide-react"; // Se estiver usando a biblioteca 'react-icons'

const ImportButton = () => {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const newCharacters = JSON.parse(reader.result);

        // Recupera os Characters salvos no localStorage
        const storedCharacters =
          JSON.parse(localStorage.getItem("characters")) || [];

        const updatedCharacters = [...storedCharacters];
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
