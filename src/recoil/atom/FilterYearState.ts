import { atom } from "recoil";
import { YearType } from "../../components/FilterYear";


const FilterYearState=atom<YearType[]>({
    default: [],
    key:'FilterYearState',
})

export default FilterYearState