import { selector } from "recoil";
import FilterYearState from "../atom/FilterYearState";

const FilterdYearValue =selector({
    key:'FilterdYearValue',
    get:({get})=>{
        const yearValue=get(FilterYearState)
        return yearValue
    }
})

export default FilterdYearValue