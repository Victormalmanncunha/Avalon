import { Character } from "../../models/Character";

interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
  editingMode: boolean;
}

const SkillsTab: React.FC<MainTabProps> = ({
  character,
  setCharacter,
  editingMode,
}) => {
  const attributeMap = {
    strength: "Força",
    dexterity: "Destreza",
    constitution: "Constituição",
    intelligence: "Inteligência",
    wisdom: "Sabedoria",
    charisma: "Carisma",
  };

  const changeSavingThrowBonus = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute: string
  ) => {
    const bonus = Number(e.target.value);
    character.setSavingThrowBonus(attribute, bonus);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeSavingThrowProficiency = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute: string
  ) => {
    const proficient = e.target.checked;
    character.setSavingThrowProficiency(attribute, proficient);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeSkillBonus = (
    e: React.ChangeEvent<HTMLInputElement>,
    skill: string
  ) => {
    const bonus = Number(e.target.value);
    character.setSkillBonus(skill, bonus);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeSkillProficiency = (
    e: React.ChangeEvent<HTMLInputElement>,
    skill: string
  ) => {
    const proficient = e.target.checked;
    character.setSkillProficiency(skill, proficient);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeSkillExpertise = (
    e: React.ChangeEvent<HTMLInputElement>,
    skill: string
  ) => {
    const expertise = e.target.checked;
    character.setSkillExpertise(skill, expertise);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeSkillAttribute = (
    e: React.ChangeEvent<HTMLInputElement>,
    skill: string
  ) => {
    const attribute = e.target.value;
    character.changeSkillAttribute(skill, attribute);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changePassiveWisdomModifier = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const modifier = Number(e.target.value);
  };

  return (
    <div className="w-full max-h-screen flex flex-col items-center gap-6 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
        Salvaguardas
      </h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Força</p>
          {editingMode ? (
            <>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.savingThrows.strength.bonus}
                onChange={(e) => changeSavingThrowBonus(e, "strength")}
                disabled={character.savingThrows.autoCalc}
              />

              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={character.savingThrows.strength.proficient}
                  onChange={(e) => changeSavingThrowProficiency(e, "strength")}
                  className="w-4 h-4 accent-blue-500 rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Proficiente
                </span>
              </label>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.savingThrows.strength.bonus}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Destreza</p>
          {editingMode ? (
            <>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.savingThrows.dexterity.bonus}
                onChange={(e) => changeSavingThrowBonus(e, "dexterity")}
                disabled={character.savingThrows.autoCalc}
              />

              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={character.savingThrows.dexterity.proficient}
                  onChange={(e) => changeSavingThrowProficiency(e, "dexterity")}
                  className="w-4 h-4 accent-blue-500 rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Proficiente
                </span>
              </label>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.savingThrows.dexterity.bonus}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Constituição</p>
          {editingMode ? (
            <>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.savingThrows.constitution.bonus}
                onChange={(e) => changeSavingThrowBonus(e, "constitution")}
                disabled={character.savingThrows.autoCalc}
              />

              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={character.savingThrows.constitution.proficient}
                  onChange={(e) =>
                    changeSavingThrowProficiency(e, "constitution")
                  }
                  className="w-4 h-4 accent-blue-500 rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Proficiente
                </span>
              </label>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.savingThrows.constitution.bonus}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Inteligência</p>
          {editingMode ? (
            <>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.savingThrows.intelligence.bonus}
                onChange={(e) => changeSavingThrowBonus(e, "intelligence")}
                disabled={character.savingThrows.autoCalc}
              />

              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={character.savingThrows.intelligence.proficient}
                  onChange={(e) =>
                    changeSavingThrowProficiency(e, "intelligence")
                  }
                  className="w-4 h-4 accent-blue-500 rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Proficiente
                </span>
              </label>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.savingThrows.intelligence.bonus}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Sabedoria</p>
          {editingMode ? (
            <>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.savingThrows.wisdom.bonus}
                onChange={(e) => changeSavingThrowBonus(e, "wisdom")}
                disabled={character.savingThrows.autoCalc}
              />

              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={character.savingThrows.wisdom.proficient}
                  onChange={(e) => changeSavingThrowProficiency(e, "wisdom")}
                  className="w-4 h-4 accent-blue-500 rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Proficiente
                </span>
              </label>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.savingThrows.wisdom.bonus}
              </p>
            </>
          )}
        </div>

        <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1">
          <p className="text-sm text-gray-500 text-center">Carisma</p>
          {editingMode ? (
            <>
              <input
                type="text"
                className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                value={character.savingThrows.charisma.bonus}
                onChange={(e) => changeSavingThrowBonus(e, "charisma")}
                disabled={character.savingThrows.autoCalc}
              />

              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={character.savingThrows.charisma.proficient}
                  onChange={(e) => changeSavingThrowProficiency(e, "charisma")}
                  className="w-4 h-4 accent-blue-500 rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Proficiente
                </span>
              </label>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                {character.savingThrows.charisma.bonus}
              </p>
            </>
          )}
        </div>
      </div>
      <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
        Perícias
      </h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {Object.entries(character.skills)
          .filter(([key]) => key !== "autoCalc")
          .sort(([keyA, valueA], [keyB, valueB]) => {
            return valueA.portugueseName.localeCompare(valueB.portugueseName);
          })
          .map(([key, value]) => {
            const attributeNameInPortuguese =
              attributeMap[value.attribute] || value.attribute;

            return (
              <div
                className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-1"
                key={key}
              >
                <p className="text-sm text-gray-500 text-center">
                  {value.portugueseName}
                </p>
                {editingMode ? (
                  <>
                    <input
                      type="text"
                      className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
                      value={character.skills[key].bonus}
                      onChange={(e) => changeSkillBonus(e, key)}
                      disabled={character.skills.autoCalc}
                    />

                    <label className="flex items-center justify-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={character.skills[key].proficient}
                        onChange={(e) => changeSkillProficiency(e, key)}
                        className="w-4 h-4 accent-blue-500 rounded"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Proficiente
                      </span>
                    </label>

                    <label className="flex items-center justify-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={character.skills[key].expertise}
                        onChange={(e) => changeSkillExpertise(e, key)}
                        className="w-4 h-4 accent-blue-500 rounded"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Expertise
                      </span>
                    </label>

                    <select
                      className="w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      defaultValue={value.attribute}
                      onChange={(e) => changeSkillAttribute(e, key)}
                    >
                      <option value="strength">Força</option>
                      <option value="dexterity">Destreza</option>
                      <option value="constitution">Constituição</option>
                      <option value="intelligence">Inteligência</option>
                      <option value="wisdom">Sabedoria</option>
                      <option value="charisma">Carisma</option>
                    </select>
                  </>
                ) : (
                  <>
                    <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
                      {character.skills[key].bonus}
                    </p>
                    <p className="text-sm text-gray-500 text-center">
                      {attributeNameInPortuguese.substring(0, 3)}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        <div className="col-span-2 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
          <p className="text-sm text-gray-500 text-center">Sabedoria passiva</p>
          {editingMode ? (
            <input
              type="text"
              className="text-center w-full p-1 rounded bg-white dark:bg-gray-700 text-textLight dark:text-textDark disabled:bg-gray-100 disabled:dark:bg-gray-900"
              disabled={character.passiveWisdom.autoCalc}
              value={character.passiveWisdom.modifier}
              onChange={(e) => {
                changePassiveWisdomModifier(e);
              }}
            />
          ) : (
            <p className="text-2xl font-semibold text-textLight dark:text-textDark text-center">
              {character.passiveWisdom.modifier}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
