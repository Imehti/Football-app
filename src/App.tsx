import { Table } from "antd";
import SearchLeague from "./components/SearchLeague";
import useTableStanding from "./components/TableStanding";
import FilterYear from "./components/FilterYear";
import NextMatches from "./components/NextMatches";
import Loading from "./components/Loading";
import EventDetails from "./components/EventDetails";

function App() {
  const { columns, data, leagueName, isLoading} = useTableStanding();

  return (
    <>
      <div className="sm:grid grid-cols-3 m-4">
        <SearchLeague />
        <FilterYear />
      </div>
      <div className="flex border-t-2">
        <h1 className="m-8 text-3xl italic font-bold">{leagueName}</h1>
      </div>


      {isLoading ? (
 
        <Loading />
      ) : (
        <>
          <Table columns={columns} dataSource={data} />
          <NextMatches />
        </>
      )}
      <EventDetails />
    </>
  );
}

export default App;
