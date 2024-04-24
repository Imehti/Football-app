import { Table } from "antd";
import SearchLeague from "./components/SearchLeague";
import useTableStanding from "./hooks/useTableStanding";

function App() {
  const { columns, data } = useTableStanding();
  return (
    <>
      <div>
        <SearchLeague />
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default App;
