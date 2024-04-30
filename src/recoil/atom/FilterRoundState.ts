import { atom } from "recoil";
import { Round } from "../../components/FilterRound";


const FilterRoundState=atom<Round[]>({
    key:'FilterRoundState',
    default: [],
})

export default FilterRoundState