import { Character } from "../../models/Character";

interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
}

const ConfigTab: React.FC<MainTabProps> = ({ character, setCharacter }) => {
  const changeAutoCalc = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute: string
  ) => {
    const isChecked = e.target.checked;

    const updatedCharacter = { ...character };

    if (attribute === "abilities") {
      updatedCharacter.abilities.autoCalc = isChecked;
    } else if (attribute === "passiveWisdom") {
      updatedCharacter.passiveWisdom.autoCalc = isChecked;
    } else if (attribute === "proficiencyBonus") {
      updatedCharacter.proficiencyBonus.autoCalc = isChecked;
    } else if (attribute === "savingThrows") {
      updatedCharacter.savingThrows.autoCalc = isChecked;
    } else if (attribute === "skills") {
      updatedCharacter.skills.autoCalc = isChecked;
    }

    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-textLight dark:text-textDark">
        Configurações
      </h1>
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="abilitiesAutoCalc"
            checked={character.abilities.autoCalc}
            onChange={(e) => changeAutoCalc(e, "abilities")}
            className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="abilitiesAutoCalc"
            className="text-textLight dark:text-textDark"
          >
            Calcular automaticamente atributos
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="passiveWisdomAutoCalc"
            checked={character.passiveWisdom.autoCalc}
            onChange={(e) => changeAutoCalc(e, "passiveWisdom")}
            className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="passiveWisdomAutoCalc"
            className="text-textLight dark:text-textDark"
          >
            Calcular automaticamente sabedoria passiva
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="proficiencyBonusAutoCalc"
            checked={character.proficiencyBonus.autoCalc}
            onChange={(e) => changeAutoCalc(e, "proficiencyBonus")}
            className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="proficiencyBonusAutoCalc"
            className="text-textLight dark:text-textDark"
          >
            Calcular automaticamente bonus de proficiência
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="savingThrowsAutoCalc"
            checked={character.savingThrows.autoCalc}
            onChange={(e) => changeAutoCalc(e, "savingThrows")}
            className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="savingThrowsAutoCalc"
            className="text-textLight dark:text-textDark"
          >
            Calcular automaticamente salvaguardas
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="skillsAutoCalc"
            checked={character.skills.autoCalc}
            onChange={(e) => changeAutoCalc(e, "skills")}
            className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="skillsAutoCalc"
            className="text-textLight dark:text-textDark"
          >
            Calcular automaticamente perícias
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConfigTab;
