import { AutoComplete } from "antd";
import React,{ useState } from "react";
import { useRecoilState } from "recoil";
import FilterYearState from "../recoil/atom/FilterYearState";
import isSelectedYearState from "../recoil/atom/isSelectedYearState";

export interface YearType {
  value: number | string;
  label: number | string;
}

const FilterYear: React.FC = () => {
  const [value, setValue] = useState<number | string>();
  const [options, setOptions] = useRecoilState<YearType[]>(FilterYearState);
  const [isSelected,setIsSelected]=useRecoilState(isSelectedYearState)
  console.log(options,isSelected);
  
  
  const startYear = 2010;
  const endYear = 2023;

  const yearOptions: YearType[] = [];
  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push({
      label: `${year}-${year + 1}`,
      value: `${year}-${year + 1}`
    });
  }

  const onSelect = (data: number | string) => {
    setValue(data);
    setIsSelected(true)
  };

  const onChange = (data: number | string) => {
    setValue(data);
    setIsSelected(false)
    if (data === '') {
      setOptions(yearOptions);
    } else {
      const filteredOptions = yearOptions?.filter((option:any) =>
        option.label.includes(data.toString())
      );
      setOptions(filteredOptions);
    }
  };

  return (
    <>
      <div className="sm:flex items-center w-full">
        <p className="mx-2">Season:</p>
        <AutoComplete
          className="w-1/3"
          value={value}
          options={yearOptions} // set options prop to yearOptions
          onSelect={onSelect}
          onChange={onChange}
          placeholder="Search Year..."
        />
      </div>
    </>
  );
};

export default FilterYear;