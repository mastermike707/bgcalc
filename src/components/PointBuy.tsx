import { useReducer, useState } from "react";
import statChangeReducer, { maxPoints } from "../hooks/statChangeReducer";
import { statType } from "../types/types";
import AbilityScore from "./AbilityScore";


const initalStats: statType[] = [
    { name: "str", displayName: "Strength", value: 8, bonus: 2, points: 0 },
    { name: "dex", displayName: "Dexterity", value: 8, bonus: 1, points: 0 },
    { name: "con", displayName: "Constitution", value: 8, bonus: 0, points: 0 },
    { name: "int", displayName: "Intelligence", value: 8, bonus: 0, points: 0 },
    { name: "wis", displayName: "Wisdom", value: 8, bonus: 0, points: 0 },
    { name: "cha", displayName: "Charisma", value: 8, bonus: 0, points: 0 }
]
export function PointBuyCalculator() {
    const [stats, changeStat] = useReducer(statChangeReducer, initalStats);
    const [bonus2, setBonus2] = useState("str");
    const [bonus1, setBonus1] = useState("dex")
    let totalPoints = 0
    stats.forEach((stat: statType) => {
        totalPoints += stat.points
    });

    function handleIncrease(statName: string) {
        changeStat({
            type: "increase",
            statName: statName
        });
    }

    function handleDecrease(statName: string) {
        changeStat({
            type: "decrease",
            statName: statName
        });
    }

    function cycleBonus(statName:string){
        if(statName!==bonus2){
            const temp = bonus2
            setBonus2(statName)
            setBonus1(temp)
        }
    }

    return <div>
        <span className="right-1">{totalPoints}/{maxPoints}</span>
        <table>
            <thead>
                <tr>
                    <th>Stat</th>
                    <th></th>
                    <th>Bonus</th>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {stats.map((stat: statType) => (
                    <AbilityScore
                        key={stat.name} displayName={stat.displayName} statValue={stat.value} bonus={
                            (bonus2===stat.name) ? 2 : ((bonus1===stat.name) ? 1 : 0)}
                        statName={stat.name} pointsUsed={stat.points} cycleBonus={cycleBonus} increase={handleIncrease} decrease={handleDecrease} />
                ))}
            </tbody>
        </table>
    </div>
}