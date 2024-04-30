import { selector } from "recoil";
import FilterRoundState from "../atom/FilterRoundState";

const FilterdRoundValue =selector({
    key:'FilterdRoundValue',
    get:({get})=>{
        const roundValue=get(FilterRoundState)
        return roundValue
    }
    
})
export default FilterdRoundValue