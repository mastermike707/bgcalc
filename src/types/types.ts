

export const initalStats: statType[] = [
    { name: "str", displayName: "Strength", value: 8, bonus: 2, points: 0 },
    { name: "dex", displayName: "Dexterity", value: 8, bonus: 1, points: 0 },
    { name: "con", displayName: "Constitution", value: 8, bonus: 0, points: 0 },
    { name: "int", displayName: "Intelligence", value: 8, bonus: 0, points: 0 },
    { name: "wis", displayName: "Wisdom", value: 8, bonus: 0, points: 0 },
    { name: "cha", displayName: "Charisma", value: 8, bonus: 0, points: 0 }
]

export enum statEnum {
    STR,
    DEX,
    CON,
    INT,
    WIS,
    CHA
}

export enum equipProficienciesEnum {
    'Light Armor',
    'Medium Armor',
    'Heavy Armor',
    'Simple Weapons',
    'Martial Weapons',
    'Battleaxes',
    'Clubs',
    'Daggers',
    'Glaives',
    'Greataxes',
    'Greatclubs',
    'Greatswords',
    'Halberds',
    'Handaxes',
    'Hand Crossbows',
    'Heavy Crossbows',
    'Javelins',
    'Light Crossbows',
    'Light Hammers',
    'Longbows',
    'Longswords',
    'Maces',
    'Morningstars',
    'Pikes',
    'Quarterstaves',
    'Rapiers',
    'Scimitars',
    'Shortbows',
    'Shortswords',
    'Sickles',
    'Spears',
    'Tridents',
    'War Picks',
    'Warhammer'
}


export type spellType = {
    name: string,
    description: string,
    Dpr: number
    DprPerLevel: number
    rounds: number
    concentration: boolean
    damage: (characterLevel: number) => number
}

export type bg3classType = {
    name: string,
    displayName: string,
    spellType: statEnum,
    spellProgression: number
    spellList: 

}

export type statType = {
    name: string,
    displayName: string,
    value: number,
    bonus: number,
    points: number
}

export type equipProficiencyType = string

export type skillType = {
    skillName: string,
    modType: string,
    modifier: number,
    proficiency: number,
    setProficiency?: (skillName: string) => void
}

export type raceType = {
    name: string
    baseSpeed: number,
    applyToCharacter: (character: bg3Character) => void
    removeFromCharacter: (character: bg3Character) => void
}

export type bg3Character = {
    race: raceType,
    stats: statType[],
    savingThrows: skillType[],
    skills: skillType[],
    skillProficiencies: number;
    equipProficiencies: equipProficiencyType[],
    baseClass: bg3classType,
    additionalClasses: {[level:number] : bg3classType},
    bonusSpells: spellType[]
    carryingCapacity: number;
}