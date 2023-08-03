import { statType } from "../types/types";


function pointsValue(statValue: number) {
    if (statValue < 14) {
        return statValue - 8;
    } else if (statValue == 14) {
        return statValue - 7;
    }
    return statValue - 6;
}

export const maxPoints = 27
//Returns object with {}
export default function statChangeReducer(stats: statType[], change: { type: 'increase' | 'decrease', statName: string }) {

    let totalPoints = 0
    stats.forEach((stat: statType) => {
        totalPoints+= stat.points
    });

    switch (change.type) {
        case 'increase':
            return stats.map(stat => {
                if (stat.name === change.statName && stat.value < 15) {
                    const newPoints = pointsValue(stat.value+1)
                    if(newPoints-stat.points+totalPoints<=maxPoints){
                        return { ...stat, value: stat.value + 1, points: pointsValue(stat.value+1) };
                    }
                }
                return stat
            });

            break;
        case 'decrease':
            return stats.map(stat => {
                const newPoints = pointsValue(stat.value+1)
                if(newPoints-stat.points+totalPoints>0){
                    if (stat.name === change.statName && stat.value > 8) {
                        return { ...stat, value: stat.value - 1, points: pointsValue(stat.value-1) };
                    }
                }
                return stat;
            });
            break;
        default:
            throw Error('Unknown change type: ' + change);
            break;
    }
}