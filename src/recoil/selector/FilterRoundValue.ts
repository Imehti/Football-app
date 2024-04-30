import { selector } from "recoil";
import FilterRoundState from "../atom/FilterRoundState";

const FilterdRoundValue =selector({
    key:'FilterdYearValue',
    get:({get})=>{
        const roundValue=get(FilterRoundState)
        return roundValue
    }
})

export default FilterdRoundValue