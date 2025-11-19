import { bg3Character } from "../types/types";

const humanEquipProficiencies = [
    'Light Armor',
    'Shield',
    'Spears',
    'Pikes',
    'Halberds',
    'Glaives'
]

export const Human = {
    name: 'Human',
    baseSpeed: 9,
    applyToCharacter: (character: bg3Character) => {
        // Proficiencies
        character.equipProficiencies.push(...humanEquipProficiencies);
        // Special features
        character.carryingCapacity = character.carryingCapacity*1.25;
        character.skillProficiencies += 1
    },
    removeFromCharacter: (character: bg3Character) => {
        // make copy
        const humanEquipProficienciesCopy = [...humanEquipProficiencies]
        // Proficiencies
        character.equipProficiencies.filter(item => {
            const keep = !humanEquipProficienciesCopy.includes(item)
            // If this was filtered out, then remove from other array
            if(!keep) humanEquipProficienciesCopy.filter(other => other !== item)
            return keep;
        });
        character.carryingCapacity = character.carryingCapacity*.75;
        character.skillProficiencies -= 1

    }
}