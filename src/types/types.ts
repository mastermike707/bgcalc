export type statType = {
    name: string,
    displayName: string,
    value: number,
    bonus: number,
    points: number
}


export type skillType = {
        skillName: string,
        modType: string,
        modifier: number,
        proficiency: number,
        setProficiency?: (skillName: string) => void
}