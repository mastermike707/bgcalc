import {races} from '../races/races'

type raceSelectorProps = {
    race: string,
    setRace: (race: string) => void
}


export default function raceSelector({race, setRace}:raceSelectorProps) {
    
    return <ul>
        {races.map}
    </ul>
}