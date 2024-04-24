
import { AutoComplete } from "antd";
import SearchLeagueState from "../recoil/atom/SearchLeagueState";
import useAllLeagues, { League } from "../hooks/useAllLeagues";
import { useRecoilState , useRecoilValue } from "recoil";

import SearchLeagueOptions from "../recoil/atom/SearchLeagueOptions";




const SearchLeague: React.FC = () => {
  const { data: allLeagues } = useAllLeagues();
  const [value, setValue] = useRecoilState(SearchLeagueState);


//   console.log(searchedValue[0]?.idLeague);
  
  
  
  const [options, setOptions] =
    useRecoilState<League[]>(SearchLeagueOptions);

  const searchOptions = allLeagues?.leagues.map((league) => league);

  const onSelect = (data: string) => {
    setValue(data);
 
  };




  const onChange = (data: string) => {
    setValue(data);
    if (data.length > 0) {
        const filteredOptions = searchOptions?.filter((option:any) =>
          option.strLeague.toLowerCase().includes(data.toLowerCase())
        );
     
        
        const optionsObjects:any= filteredOptions?.map((option:any) => ({
            label: option.strLeague,
            value: option.strLeague,
            idLeague:option.idLeague
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