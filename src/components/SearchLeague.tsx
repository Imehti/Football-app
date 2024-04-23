import { startTransition } from "react";
import { AutoComplete } from "antd";
import SearchLeagueState from "../recoil/atom/SearchLeagueState";
import useAllLeagues, { AllLeagues, League } from "../hooks/useAllLeagues";
import { useRecoilState } from "recoil";
import { useState } from 'react'
import SearchLeagueOptions from "../recoil/atom/SearchLeagueOptions";



const SearchLeague: React.FC = () => {
  const { data: allLeagues } = useAllLeagues();
  const [value, setValue] = useRecoilState(SearchLeagueState);
  const [options, setOptions] =
    useRecoilState<League[]>(SearchLeagueOptions);

  const searchOptions = allLeagues?.leagues.map((league) => league.strLeague);

  const onSelect = (data: string) => {
    setValue(data);
  };




  const onChange = (data: string) => {
    setValue(data);
    if (data.length > 0) {
        const filteredOptions = searchOptions?.filter((option:string) =>
          option.toLowerCase().includes(data.toLowerCase())
        );
        const optionsObjects:any= filteredOptions?.map((option:string) => ({
            label: option,
            value: option,
          }));
       
        
        setOptions(optionsObjects);
      } else {
        setOptions([]);
      }

    
  };


  return (
    <>
      <div className="m-8 flex items-center">
        <p className="mx-2">Other Leagues Standing:</p>
        <AutoComplete
          className="w-1/3"
          value={value}
          options={options}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="Search League..."
        />
      </div>
    </>
  );
};

export default SearchLeague;