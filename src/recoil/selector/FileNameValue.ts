import { selector } from "recoil";
import FileNameState from "../atom/FileNameState";

const FileNameValue=selector({
    key:'FileNameValue',
    get:({get})=>{
        const fileName=get(FileNameState)
        return fileName
    }
})

export default FileNameValue