import { AutoComplete } from "antd";
import SearchLeagueState from "../recoil/atom/SearchLeagueState";
import useAllLeagues, { League } from "../hooks/useAllLeagues";
import { useRecoilState } from "recoil";

import SearchLeagueOptions from "../recoil/atom/SearchLeagueOptions";
import isSelectedLeagueaState from "../recoil/atom/isSelectedLeagueState";


const SearchLeague: React.FC = () => {
  const { data: allLeagues } = useAllLeagues();
  const [value, setValue] = useRecoilState(SearchLeagueState);
  const [isSelected,setIsSelected]=useRecoilState(isSelectedLeagueaState)
  console.log(isSelected);
  

 

  const [options, setOptions] = useRecoilState<League[]>(SearchLeagueOptions);

  const searchOptions = allLeagues?.leagues.map((league) => league);

  const onSelect = (data: string) => {
    setValue(data);
    setIsSelected(true)
  };

  const onChange = (data: string) => {
    setValue(data);
    setIsSelected(false)
    if (data.length > 0) {
      const filteredOptions = searchOptions?.filter((option: any) =>
        option.strLeague.toLowerCase().includes(data.toLowerCase())
      );

      const optionsObjects: any = filteredOptions?.map((option: any) => ({
        label: option.strLeague,
        value: option.strLeague,
        idLeague: option.idLeague,
      }));

      setOptions(optionsObjects);
    } else {
      setOptions([]);
    }
  };

  return (
    <>
      <div className="sm:flex items-center w-full">
        <p className="mx-2">Other Leagues:</p>
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
