import { useEffect, useState } from "react"
import { statType, skillType } from "../types/types";
import { PointBuyCalculator } from "./PointBuy";
import RaceSelector from "./RaceSelector";
import Skills from "./Skills";



type skillsType = {
    [skillName: string]: skillType
}

export default function BgCharacter() {
    const [stats, setStats] = useState<statType[]>(initalStats)
    const [race, setRace] = useState<string>('Human')
    // const [savingThrows, setSavingThrows] = useState<skillsType>({})
    const [skills, setSkills] = useState<skillsType>({})
    // const [EquipmentProficiencies, setEquipmentProficiencies] = useState<skillsType>({})

    // function setSavingThrowProficiency(key, proficiency) {
    //     const newSavingThrows = {...savingThrows};
    //     newSavingThrows[key].proficiency = proficiency;
    //     setSavingThrows(newSavingThrows);
    // }

    function setSkillProficiency(key,proficiency) {
        const newSkills = {...savingThrows};
        newSkills[key].proficiency = proficiency;
        setSkills(newSkills);
    }

    // const [savingThrows, setSavingThrows] = useState<skillType[]>([])
    // const [skills, setSkills] = useState<skillType[]>([])

    //Update modifier when stats changes
    // useEffect(() =>{
    //     setSkills(skills.map((skill:skillType)=>{
    //         return {...skill, modifier: stats[skill.modType].value};
    //     }))
    // }, [stats])

    return (
    <>
        <PointBuyCalculator statsProp={stats} setStats={setStats} />
        <RaceSelector race={race} setRace={setRace} />
        {/* <Skills skills={savingThrows} setProficiency={} /> */}
        <Skills skills={skills} setProficiency={setSkillProficiency} />
        {/* <EquipmentProficiencies equipmentProficiencies /> */}
    </>
    );
}