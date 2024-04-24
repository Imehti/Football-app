
import { selector } from "recoil";
import isSelectedYearState from "../atom/isSelectedYearState";


const isSelectedYearValue=selector({
    key:'isSelectedYearValue',
    get:({get})=>{
        const isSelectedYear=get(isSelectedYearState)
        return isSelectedYear
    }
})

export default isSelectedYearValue