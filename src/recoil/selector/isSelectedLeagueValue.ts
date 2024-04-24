import { selector } from "recoil";
import isSelectedLeagueaState from "../atom/isSelectedLeagueState";

const isSelectedLeagueaValue=selector({
    key:'isSelectedLeagueaValue',
    get:({get})=>{
        const selectedLeagueStatu=get(isSelectedLeagueaState)
        return selectedLeagueStatu
    }
})

export default isSelectedLeagueaValue