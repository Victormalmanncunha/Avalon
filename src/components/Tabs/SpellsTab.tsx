import { Character } from "../../models/Character";

interface Spell {
  spellSlotMax: number;
  spellSlotUsed: number;
  spells: string;
}

interface Spells {
  cantrips: string;
  level1: Spell;
  level2: Spell;
  level3: Spell;
  level4: Spell;
  level5: Spell;
  level6: Spell;
  level7: Spell;
  level8: Spell;
  level9: Spell;
}

interface MainTabProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
  editingMode: boolean;
}

const SpellsTab: React.FC<MainTabProps> = ({
  character,
  setCharacter,
  editingMode,
}) => {
  const changeSpellSlotMax = (
    e: React.ChangeEvent<HTMLInputElement>,
    spellLevel: keyof Spells
  ) => {
    const maxSpellSlot = Number(e.target.value);
    character.setMaxSpellSlot(maxSpellSlot, spellLevel);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeSpellSlotUsed = (
    e: React.ChangeEvent<HTMLInputElement>,
    spellLevel: keyof Spells
  ) => {
    const usedSpellSlot = Number(e.target.value);
    character.setUsedSpellSlot(usedSpellSlot, spellLevel);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  const changeSpellsStored = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    spellLevel: keyof Spells
  ) => {
    const spellsStored = e.target.value;
    character.setSpellsStored(spellsStored, spellLevel);
    const changedCharacter = Object.assign(new Character(character.name), {
      ...character,
    });
    setCharacter(changedCharacter);
  };

  return (
    <div className="w-full max-h-screen flex flex-col items-center gap-10 p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-textLight dark:text-textDark">
        Feitiços
      </h1>
      {["cantrips", 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => {
        const spellLevelKey =
          level === "cantrips" ? "cantrips" : `level${level}`;
        const spellData = character.spells[spellLevelKey as keyof Spells];

        return (
          <div key={level} className="w-10/12">
            <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm min-h-fit max-h-[600px]">
              <h2 className="text-xl font-semibold text-textLight dark:text-textDark mb-2 text-center">
                {level === "cantrips" ? "Truques" : `Nível ${level}`}
              </h2>
              {level !== "cantrips" &&
                spellData &&
                typeof spellData !== "string" && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        Slots Máximos
                      </label>
                      {editingMode ? (
                        <input
                          type="number"
                          className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                          onChange={(e) =>
                            changeSpellSlotMax(e, spellLevelKey as keyof Spells)
                          }
                          value={spellData.spellSlotMax}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white text-center">
                          {spellData.spellSlotMax}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        Slots Usados
                      </label>
                      {editingMode ? (
                        <input
                          type="number"
                          className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                          onChange={(e) =>
                            changeSpellSlotUsed(
                              e,
                              spellLevelKey as keyof Spells
                            )
                          }
                          value={spellData.spellSlotUsed}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white text-center">
                          {spellData.spellSlotUsed}
                        </p>
                      )}
                    </div>
                  </>
                )}

              <div className="w-full ">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-center p-5">
                  Magias
                </label>
                {editingMode ? (
                  <textarea
                    placeholder={`Escreva suas magias de nível ${level} aqui...`}
                    className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm overflow-auto"
                    onChange={(e) =>
                      changeSpellsStored(e, spellLevelKey as keyof Spells)
                    }
                    value={
                      typeof spellData === "string"
                        ? spellData
                        : spellData.spells
                    }
                  ></textarea>
                ) : (
                  <p className="text-gray-900 dark:text-white whitespace-pre-wrap break-words w-full max-h-80 overflow-y-auto">
                    {typeof spellData === "string"
                      ? spellData
                      : spellData.spells}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpellsTab;
