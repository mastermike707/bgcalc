
type SkillProps = {
    skillName: string,
    modifier: number,
    proficiency: number,
    setProficiency?: (skillName: string) => void
}



export default function Skill({ skillName, modifier, proficiency, setProficiency }: SkillProps) {

    return (
        <tr>
            <td>{skillName}</td>
            <td>{modifier}</td>
            <td>{proficiency}</td>
            <td>{setProficiency && <button onClick={() => setProficiency(skillName)} />}</td>
            <td>{modifier+proficiency}</td>
        </tr>
    );
}