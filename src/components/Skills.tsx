import { skillType } from "../types/types";
import Skill from "./Skill"

type SkillsProps = {
    skills: {[skillName: string]: skillType}
    setProficiency: (key:string, proficiency: number) => void
}

export default function Skills({skills, setProficiency}:SkillsProps){
    
    

    return <table>
        <thead>
            <tr>
                <td>Skill</td>
                <td>Modifier</td>
                <td>Proficiency</td>
                <td>Total</td>
            </tr>
        </thead>
        <tbody>{skills.map((skill:skillType)=>{
            <Skill {...skill} setProficiency={setProficiency} />
        })}</tbody>
    </table>
}