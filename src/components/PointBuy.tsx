import { useReducer, useState } from "react";
import statChangeReducer, { maxPoints } from "../hooks/statChangeReducer";
import { statType } from "../types/types";
import AbilityScore from "./AbilityScore";

type PointBuyCalculatorProps = {
    statsProp: statType[],
    setStats: (value: statType[]) => void
}

export function PointBuyCalculator({statsProp, setStats} : PointBuyCalculatorProps) {
    const [stats, changeStat] = useReducer(statChangeReducer, statsProp);
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
        setStats(stats);
    }

    function handleDecrease(statName: string) {
        changeStat({
            type: "decrease",
            statName: statName
        });
        setStats(stats);
    }

    function cycleBonus(statName:string){
        if(statName!==bonus2){
            const temp = bonus2
            setBonus2(statName)
            setBonus1(temp)
        }
        setStats(stats);
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