
type AbilityScoreProps = {
    statName: string
    displayName: string
    statValue: number
    bonus: number
    pointsUsed: number
    cycleBonus: (statName: string) => void
    increase: (statName: string) => void
    decrease: (statName: string) => void
}

export default function AbilityScore({ statName, displayName, statValue, bonus, pointsUsed, cycleBonus, increase, decrease }: AbilityScoreProps) {

    return (
        <tr>
            <td>{displayName}</td>
            <td>{statValue}</td>
            <td><button onClick={() => cycleBonus(statName)}>{bonus}</button></td>
            <td>{bonus+statValue}</td>
            <td><button onClick={() => increase(statName)}>+</button></td>
            <td><button onClick={() => decrease(statName)}>-</button></td>
            <td>{pointsUsed}</td>
        </tr>
    );
}