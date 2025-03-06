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
  const changeSpell = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    level: keyof Spells,
    field: "spells" | "spellSlotUsed" | "spellSlotMax"
  ) => {
    const newCharacter = { ...character };
    if (field === "spells") {
      newCharacter.spells[level].spells = e.target.value;
    } else {
      newCharacter.spells[level][field] = parseInt(e.target.value);
    }
    setCharacter(newCharacter);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-textLight dark:text-textDark">
        Feitiços
      </h1>
      <div className="w-full h-auto flex flex-wrap gap-6">
        {["cantrips", 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => {
          const levelKey = typeof level === "string" ? level : `level${level}`;
          const spellData = character.spells[levelKey as keyof Spells];

          return (
            <div key={level} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
                <h2 className="text-xl font-semibold text-textLight dark:text-textDark mb-2">
                  {level === "cantrips" ? "Cantrips" : `Nível ${level}`}
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor={`${levelKey}-slotMax`}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Slots Máximos
                  </label>
                  <input
                    id={`${levelKey}-slotMax`}
                    type="number"
                    value={spellData.spellSlotMax}
                    onChange={(e) =>
                      changeSpell(e, levelKey as keyof Spells, "spellSlotMax")
                    }
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor={`${levelKey}-slotUsed`}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Slots Usados
                  </label>
                  <input
                    id={`${levelKey}-slotUsed`}
                    type="number"
                    value={spellData.spellSlotUsed}
                    onChange={(e) =>
                      changeSpell(e, levelKey as keyof Spells, "spellSlotUsed")
                    }
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${levelKey}-spells`}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Magias
                  </label>
                  <textarea
                    id={`${levelKey}-spells`}
                    placeholder={`Escreva suas magias de nível ${level} aqui...`}
                    value={spellData.spells}
                    onChange={(e) =>
                      changeSpell(e, levelKey as keyof Spells, "spells")
                    }
                    className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
                  ></textarea>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpellsTab;
