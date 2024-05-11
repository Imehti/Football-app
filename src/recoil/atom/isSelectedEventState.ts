import { atom } from "recoil";

const isSelectedEventState=atom({
    key:'isSelectedEvent',
    default:false
})

export default isSelectedEventState