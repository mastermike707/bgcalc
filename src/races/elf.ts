import { bg3Character } from "../types/types";

const elfEquipProficiencies = [


]

export const Elf = {
    name: 'Elf',
    baseSpeed: 9,
    applyToCharacter: (character: bg3Character) => {
        // Proficiencies
        character.equipProficiencies.push(...elfEquipProficiencies);
        // Special features
        character.carryingCapacity = character.carryingCapacity*1.25;
        character.skillProficiencies += 1
    },
    removeFromCharacter: (character: bg3Character) => {
        // Proficiencies
        character.equipProficiencies.filter(item => !elfEquipProficiencies.includes(item));

    }
}