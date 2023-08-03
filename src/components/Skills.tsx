import { skillType } from "../types/types";
import Skill from "./Skill"

type SkillsProps = {
    skills: skillType[]

}

export default function Skills({skills, stats}:SkillsProps){
    
    

    return <table>
        <thead>
            <tr>
                <td>Skill</td>
                <td>Modifier</td>
                <td>Proficiency</td>
                <td>Total</td>
            </tr>
        </thead>
        <tbody>{skills.map(skill:skillType=>{
            <Skill {...skill} />
        })}</tbody>
    </table>
}