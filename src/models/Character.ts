interface Ability {
  modifier: number;
  score: number;
  autoCalc: boolean;
}

interface Abilities {
  strength: Ability;
  dexterity: Ability;
  constitution: Ability;
  intelligence: Ability;
  wisdom: Ability;
  charisma: Ability;
}

export class Character {
  name: string;
  abilities: Abilities;
  level: number;

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.abilities = {
      strength: { modifier: 0, score: 10, autoCalc: true },
      dexterity: { modifier: 0, score: 10, autoCalc: true },
      constitution: { modifier: 0, score: 10, autoCalc: true },
      intelligence: { modifier: 0, score: 10, autoCalc: true },
      wisdom: { modifier: 0, score: 10, autoCalc: true },
      charisma: { modifier: 0, score: 10, autoCalc: true },
    };
  }

  updateModifiers() {
    Object.keys(this.abilities).forEach((key) => {
      const ability = this.abilities[key as keyof Abilities];
      if (ability.autoCalc) {
        ability.modifier = Math.floor((ability.score - 10) / 2);
      }
    });
    console.log(this.abilities.strength.modifier);
  }
}
