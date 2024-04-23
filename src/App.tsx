import { useEffect } from "react";
import axios from "axios";
import TableStanding from "./components/TableStanding";

function App() {
  // useEffect(() => {
  //   axios
  //    .get('https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2020-2021')
  //    .then(res => console.log(res.data))
  //    .catch(error => console.error(error));
  // }, []);
  return(
    <TableStanding />
  )
}

export default App;