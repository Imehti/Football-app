import { useState } from "react";
import { useRecoilState } from "recoil";
import FilterRoundState from "../recoil/atom/FilterRoundState";
import { AutoComplete } from "antd";

export interface Round {
  value: number | string;
}




function FilterRound() {
  const [value, setValue] = useState<number | string>();
  const [options, setOptions] = useRecoilState<Round[]>(FilterRoundState);
  console.log(options);
  
  const startYear = 0;
  const endYear = 37;
  
  const roundOptions: Round[] = [];
  for (let year = startYear; year <= endYear; year++) {
    roundOptions.push({
      value: year + 1,
    });
  }

  const onSelect = (data: number | string) => {
    setValue(data);
  };

  const onChange = (data: number | string) => {
    setValue(data);
    if (data === "") {
      setOptions(roundOptions);
    } else {
      const filteredOptions = roundOptions?.filter((option: any) =>
        option.value === Number(data) 
    
      );
      setOptions(filteredOptions);
    }
  };


  return (
    <>
      <div className="sm:flex items-center w-full">
        <p className="mx-2">Round:</p>
        <AutoComplete
          className="w-1/3"
          value={value}
          options={roundOptions} // set options prop to yearOptions
          onSelect={onSelect}
          onChange={onChange}
          placeholder="Search Round..."
        />
      </div>
    </>
  );
}

export default FilterRound;
