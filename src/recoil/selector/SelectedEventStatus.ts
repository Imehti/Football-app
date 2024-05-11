
import { selector } from "recoil";
import isSelectedEventState from "../atom/isSelectedEventState";

const selectedEventStatus=selector({
    key:'selectedEventState',
    get:({get}) => {
        const selectedEventValue=get(isSelectedEventState)
        return selectedEventValue
    }
})

export default selectedEventStatus