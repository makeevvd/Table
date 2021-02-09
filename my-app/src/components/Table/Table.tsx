import React, {useState} from 'react';
import data from './../../default.json'
import Row from "./Row/Row";
import {useSortData} from "../../hooks/useSortData";

const tableData = JSON.parse(JSON.stringify(data));




const Table: React.FC = () => {


    const [sortConfig, setSortConfig] = useState<SortKeysType | null>(null);

    const headersArray = [...Object.keys(tableData[0])];
    const headers = headersArray.map((header:SortKeysType) => <th onClick={() => setSortConfig(header)}>{header}</th>);

    const sortedData = useSortData(tableData, sortConfig);

    const rows = tableData.map((data: DataInterface) => <Row data={data}/>);

    return (
        <div>
            <thead>
            <tr>
                {headers}
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </div>
    );
};

export interface DataInterface {
    id: number
    parentId: number
    isActive: boolean
    balance: string
    name: string
    email: string
}

export type SortKeysType = keyof DataInterface;



export default Table;