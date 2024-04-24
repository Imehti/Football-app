import { AutoComplete } from "antd";
import { useRecoilState } from "recoil";

const FilterYear = () => {
    const startYear = 2010;
    const endYear = 2023;
  
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
      yearOptions.push({
        label: `${year}-${year + 1}`,
        value: `${year}-${year + 1}`
      });
    }
 

    return(
        <></>
    )
    
}  

export default FilterYear
