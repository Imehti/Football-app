
import {  Table } from "antd";

import useTableStanding from "../hooks/useTableStanding";

function TableStanding(){
    const {columns , data }=useTableStanding()

    return(
        <Table columns={columns} dataSource={data} />
    )
}





export default TableStanding;
