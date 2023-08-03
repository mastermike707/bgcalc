import { useEffect, useState } from "react"
import { statType, skillType } from "../types/types";
import { PointBuyCalculator } from "./PointBuy";



export default function BgCharacter() {
    const [stats, setStats] = useState<statType[]>([])
    // const [savingThrows, setSavingThrows] = useState<skillType[]>([])
    // const [skills, setSkills] = useState<skillType[]>([])

    //Update modifier when stats changes
    // useEffect(() =>{
    //     setSkills(skills.map((skill:skillType)=>{
    //         return {...skill, modifier: stats[skill.modType].value};
    //     }))
    // }, [stats])

    return <>
    {/* <PointBuyCalculator stats={stats} setStats={setStats} /> */}
    
    </>
}