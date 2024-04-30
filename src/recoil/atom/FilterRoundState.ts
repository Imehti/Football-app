import { atom } from "recoil";
import { Round } from "../../components/FilterRound";


const FilterRoundState=atom<Round[]>({
    default: [],
    key:'FilterRoundState',
})

export default FilterRoundState