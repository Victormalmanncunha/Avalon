interface Ability {
  modifier: number;
  score: number;
}

interface Abilities {
  autoCalc: boolean;
  strength: Ability;
  dexterity: Ability;
  constitution: Ability;
  intelligence: Ability;
  wisdom: Ability;
  charisma: Ability;
}

interface SavingThrow {
  bonus: number;
  proficient: boolean;
}

interface SavingThrows {
  autoCalc: boolean;
  strength: SavingThrow;
  dexterity: SavingThrow;
  constitution: SavingThrow;
  intelligence: SavingThrow;
  wisdom: SavingThrow;
  charisma: SavingThrow;
}

interface Health {
  current: number;
  max: number;
}

interface Skill {
  bonus: number;
  attribute: string;
  proficient: boolean;
  expertise: boolean;
  portugueseName: string;
}

interface Skills {
  autoCalc: boolean;
  athletics: Skill;
  acrobatics: Skill;
  sleightOfHand: Skill;
  stealth: Skill;
  arcana: Skill;
  history: Skill;
  investigation: Skill;
  nature: Skill;
  religion: Skill;
  animalHandling: Skill;
  insight: Skill;
  medicine: Skill;
  perception: Skill;
  survival: Skill;
  deception: Skill;
  intimidation: Skill;
  performance: Skill;
  persuasion: Skill;
}

interface ProficiencyBonus {
  bonus: number;
  autoCalc: boolean;
}

interface PassiveWisdom {
  autoCalc: boolean;
  modifier: number;
}

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

export class Character {
  name: string;
  player: string;
  class: string;
  race: string;
  movement: string;
  health: Health;
  armorClass: number;
  abilities: Abilities;
  level: number;
  proficiencyBonus: ProficiencyBonus;
  savingThrows: SavingThrows;
  skills: Skills;
  passiveWisdom: PassiveWisdom;
  initiative: number;
  inventory: string;
  notes: string;
  spells: Spells;

  constructor(name: string) {
    this.name = name;
    this.player = "";
    this.class = "";
    this.race = "";
    this.movement = "30 pés/9M";
    this.health = { current: 10, max: 10 };
    this.armorClass = 10;
    this.level = 1;
    this.abilities = {
      autoCalc: true,
      strength: { modifier: 0, score: 10 },
      dexterity: { modifier: 0, score: 10 },
      constitution: { modifier: 0, score: 10 },
      intelligence: { modifier: 0, score: 10 },
      wisdom: { modifier: 0, score: 10 },
      charisma: { modifier: 0, score: 10 },
    };
    this.proficiencyBonus = { bonus: 2, autoCalc: true };
    this.savingThrows = {
      autoCalc: true,
      strength: { bonus: 0, proficient: false },
      dexterity: { bonus: 0, proficient: false },
      constitution: { bonus: 0, proficient: false },
      intelligence: { bonus: 0, proficient: false },
      wisdom: { bonus: 0, proficient: false },
      charisma: { bonus: 0, proficient: false },
    };
    this.skills = {
      autoCalc: true,
      athletics: {
        bonus: 0,
        attribute: "strength",
        proficient: false,
        expertise: false,
        portugueseName: "Atletismo",
      },
      acrobatics: {
        bonus: 0,
        attribute: "dexterity",
        proficient: false,
        expertise: false,
        portugueseName: "Acrobacia",
      },
      sleightOfHand: {
        bonus: 0,
        attribute: "dexterity",
        proficient: false,
        expertise: false,
        portugueseName: "Prestidigitação",
      },
      stealth: {
        bonus: 0,
        attribute: "dexterity",
        proficient: false,
        expertise: false,
        portugueseName: "Furtividade",
      },
      arcana: {
        bonus: 0,
        attribute: "intelligence",
        proficient: false,
        expertise: false,
        portugueseName: "Arcanismo",
      },
      history: {
        bonus: 0,
        attribute: "intelligence",
        proficient: false,
        expertise: false,
        portugueseName: "História",
      },
      investigation: {
        bonus: 0,
        attribute: "intelligence",
        proficient: false,
        expertise: false,
        portugueseName: "Investigação",
      },
      nature: {
        bonus: 0,
        attribute: "intelligence",
        proficient: false,
        expertise: false,
        portugueseName: "Natureza",
      },
      religion: {
        bonus: 0,
        attribute: "intelligence",
        proficient: false,
        expertise: false,
        portugueseName: "Religião",
      },
      animalHandling: {
        bonus: 0,
        attribute: "wisdom",
        proficient: false,
        expertise: false,
        portugueseName: "Adestrar animais",
      },
      insight: {
        bonus: 0,
        attribute: "wisdom",
        proficient: false,
        expertise: false,
        portugueseName: "Intuição",
      },
      medicine: {
        bonus: 0,
        attribute: "wisdom",
        proficient: false,
        expertise: false,
        portugueseName: "Medicina",
      },
      perception: {
        bonus: 0,
        attribute: "wisdom",
        proficient: false,
        expertise: false,
        portugueseName: "Percepção",
      },
      survival: {
        bonus: 0,
        attribute: "wisdom",
        proficient: false,
        expertise: false,
        portugueseName: "Sobrevivência",
      },
      deception: {
        bonus: 0,
        attribute: "charisma",
        proficient: false,
        expertise: false,
        portugueseName: "Enganação",
      },
      intimidation: {
        bonus: 0,
        attribute: "charisma",
        proficient: false,
        expertise: false,
        portugueseName: "Intimidação",
      },
      performance: {
        bonus: 0,
        attribute: "charisma",
        proficient: false,
        expertise: false,
        portugueseName: "Performance",
      },
      persuasion: {
        bonus: 0,
        attribute: "charisma",
        proficient: false,
        expertise: false,
        portugueseName: "Persuasão",
      },
    };
    this.passiveWisdom = { autoCalc: true, modifier: 10 };
    this.initiative = 0;
    this.inventory = "";
    this.notes = "";
    this.spells = {
      cantrips: "",
      level1: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level2: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level3: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level4: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level5: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level6: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level7: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level8: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
      level9: {
        spellSlotMax: 0,
        spellSlotUsed: 0,
        spells: "",
      },
    };
  }

  setLevel(level: number) {
    this.level = level;

    if (this.proficiencyBonus.autoCalc) {
      this.updateProficiencyBonus();
    }
  }

  updateModifiers() {
    Object.keys(this.abilities)
      .filter((key) => key !== "autoCalc")
      .forEach((key) => {
        const ability =
          this.abilities[key as keyof Omit<Abilities, "autoCalc">];

        ability.modifier = Math.floor((ability.score - 10) / 2);
      });
    if (this.savingThrows.autoCalc) {
      this.updateSavingThrows();
    }
    if (this.skills.autoCalc) {
      this.updateSkills();
    }
  }

  updateProficiencyBonus() {
    this.proficiencyBonus.bonus = 2 + Math.floor((this.level - 1) / 4);
    if (this.savingThrows.autoCalc) {
      this.updateSavingThrows();
    }
    if (this.skills.autoCalc) {
      this.updateSkills();
    }
    if (this.passiveWisdom.autoCalc) {
      this.updatePassiveWisdom();
    }
  }

  updateSavingThrows() {
    Object.keys(this.savingThrows)
      .filter((key) => key !== "autoCalc")
      .forEach((key) => {
        const savingThrowKey = key as keyof Omit<SavingThrows, "autoCalc">;
        const savingThrow = this.savingThrows[savingThrowKey];

        const abilityKey = savingThrowKey as keyof Omit<Abilities, "autoCalc">;
        savingThrow.bonus = this.abilities[abilityKey].modifier;

        if (savingThrow.proficient) {
          savingThrow.bonus += this.proficiencyBonus.bonus;
        }
      });
  }

  updateSkills() {
    Object.keys(this.skills)
      .filter((key) => key !== "autoCalc")
      .forEach((key) => {
        const skill = this.skills[key as keyof Omit<Skills, "autoCalc">];
        const abilityModifier =
          this.abilities[skill.attribute as keyof Omit<Abilities, "autoCalc">]
            .modifier;

        if (this.skills.autoCalc) {
          skill.bonus = abilityModifier;
          if (skill.proficient) skill.bonus += this.proficiencyBonus.bonus;
          if (skill.expertise) skill.bonus += this.proficiencyBonus.bonus;
        }
      });
  }

  changeSkillAttribute(skill: string, attribute: string) {
    const validAttributes = [
      "strength",
      "dexterity",
      "intelligence",
      "wisdom",
      "charisma",
      "constitution",
    ];
    const selectedSkill = this.skills[skill as keyof Omit<Skills, "autoCalc">];

    if (selectedSkill && validAttributes.includes(attribute)) {
      selectedSkill.attribute = attribute;
      if (this.skills.autoCalc) {
        this.updateSkills();
      }
    }
  }

  setScore(attribute: string, score: number) {
    this.abilities[attribute as keyof Omit<Abilities, "autoCalc">].score =
      score;
    if (this.abilities.autoCalc) {
      this.updateModifiers();
    }
    if (this.passiveWisdom.autoCalc) {
      this.updatePassiveWisdom();
    }
  }

  setAttributeModifier(attribute: string, modifier: number) {
    this.abilities[attribute as keyof Omit<Abilities, "autoCalc">].modifier =
      modifier;
    if (this.savingThrows.autoCalc) {
      this.updateSavingThrows();
    }
    if (this.skills.autoCalc) {
      this.updateSkills();
    }
  }

  setSavingThrowProficiency(attribute: string, proficient: boolean) {
    this.savingThrows[
      attribute as keyof Omit<SavingThrows, "autoCalc">
    ].proficient = proficient;
    if (this.savingThrows.autoCalc) {
      this.updateSavingThrows();
    }
  }

  setSavingThrowBonus(attribute: string, bonus: number) {
    this.savingThrows[attribute as keyof Omit<SavingThrows, "autoCalc">].bonus =
      bonus;
  }

  setSkillBonus(skill: string, bonus: number) {
    this.skills[skill as keyof Omit<Skills, "autoCalc">].bonus = bonus;
  }

  setSkillProficiency(skill: string, proficient: boolean) {
    if (
      !proficient &&
      this.skills[skill as keyof Omit<Skills, "autoCalc">].expertise
    ) {
      this.skills[skill as keyof Omit<Skills, "autoCalc">].expertise = false;
    }
    this.skills[skill as keyof Omit<Skills, "autoCalc">].proficient =
      proficient;
    if (this.skills.autoCalc) {
      this.updateSkills();
    }
    if (this.passiveWisdom.autoCalc) {
      this.updatePassiveWisdom();
    }
  }

  setSkillExpertise(skill: string, expertise: boolean) {
    this.skills[skill as keyof Omit<Skills, "autoCalc">].proficient = true;
    this.skills[skill as keyof Omit<Skills, "autoCalc">].expertise = expertise;
    if (this.skills.autoCalc) {
      this.updateSkills();
    }
  }

  setPassiveWisdom(modifier: number) {
    this.passiveWisdom.modifier = modifier;
  }

  updatePassiveWisdom() {
    let basePassiveWisdom = 10;
    basePassiveWisdom += this.abilities.wisdom.modifier;
    if (this.skills.perception.proficient) {
      basePassiveWisdom += this.proficiencyBonus.bonus;
    }
    this.passiveWisdom.modifier = basePassiveWisdom;
  }
}
