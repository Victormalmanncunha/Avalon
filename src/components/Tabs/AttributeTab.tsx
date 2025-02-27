import { Character } from "../../models/Character";

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
  const changeScore = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute: string
  ) => {
    const score = Number(e.target.value);
    character.setScore(attribute, score);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeAttributeModifier = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute: string
  ) => {
    const modifier = Number(e.target.value);
    character.setAttributeModifier(attribute, modifier);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-6">
      <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
        Atributos
      </h2>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Força</p>
          {editingMode ? (
            <>
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Modificador
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.abilities.strength.modifier}
                onChange={(e) => changeAttributeModifier(e, "strength")}
                disabled={character.abilities.autoCalc}
              />
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Pontuação
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark"
                value={character.abilities.strength.score}
                onChange={(e) => changeScore(e, "strength")}
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.strength.modifier}
              </p>
              <p className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.strength.score}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Destreza</p>
          {editingMode ? (
            <>
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Modificador
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.abilities.dexterity.modifier}
                onChange={(e) => changeAttributeModifier(e, "dexterity")}
                disabled={character.abilities.autoCalc}
              />
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Pontuação
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark"
                value={character.abilities.dexterity.score}
                onChange={(e) => changeScore(e, "dexterity")}
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.dexterity.modifier}
              </p>
              <p className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.dexterity.score}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Constituição</p>
          {editingMode ? (
            <>
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Modificador
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.abilities.constitution.modifier}
                onChange={(e) => changeAttributeModifier(e, "constitution")}
                disabled={character.abilities.autoCalc}
              />
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Pontuação
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark"
                value={character.abilities.constitution.score}
                onChange={(e) => changeScore(e, "constitution")}
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.constitution.modifier}
              </p>
              <p className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.constitution.score}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Inteligência</p>
          {editingMode ? (
            <>
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Modificador
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.abilities.intelligence.modifier}
                onChange={(e) => changeAttributeModifier(e, "intelligence")}
                disabled={character.abilities.autoCalc}
              />
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Pontuação
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark"
                value={character.abilities.intelligence.score}
                onChange={(e) => changeScore(e, "intelligence")}
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.intelligence.modifier}
              </p>
              <p className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.intelligence.score}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Sabedoria</p>
          {editingMode ? (
            <>
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Modificador
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.abilities.wisdom.modifier}
                onChange={(e) => changeAttributeModifier(e, "wisdom")}
                disabled={character.abilities.autoCalc}
              />
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Pontuação
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark"
                value={character.abilities.wisdom.score}
                onChange={(e) => changeScore(e, "wisdom")}
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.wisdom.modifier}
              </p>
              <p className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.wisdom.score}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Carisma</p>
          {editingMode ? (
            <>
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Modificador
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.abilities.charisma.modifier}
                onChange={(e) => changeAttributeModifier(e, "charisma")}
                disabled={character.abilities.autoCalc}
              />
              <label className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                Pontuação
              </label>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark"
                value={character.abilities.charisma.score}
                onChange={(e) => changeScore(e, "charisma")}
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.charisma.modifier}
              </p>
              <p className="text-sm font-semibold text-textLight dark:text-textDark text-center">
                {character.abilities.charisma.score}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttributeTab;
