import React, {useState} from 'react';
import data from './../../default.json'
import Row from "./Row/Row";
import {useSortData} from "../../hooks/useSortData";
import styled from "styled-components";

const tableData:DataInterface[] = JSON.parse(JSON.stringify(data));

export type OrderType = "ascending" | "descending";

export interface ConfigInterface {
    key: SortKeysType
    order?: OrderType
}


const Table: React.FC = () => {


    // const [sortConfig, setSortConfig] = useState<ConfigInterface | null>(null);

    const {items, setSort} = useSortData(tableData);

    const headersArray = [...Object.keys(tableData[0])] as SortKeysType[];
    const headers = headersArray.map((header:SortKeysType) => <Header
        onClick={() => setSort(header)}>{header}
    </Header>);


    const rows = items.map((data: DataInterface) => <Row data={data}/>);

    return (
        <TableWrapper>
            <thead>
            <RowWrapper>
                {headers}
            </RowWrapper>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </TableWrapper>
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

export const RowWrapper = styled.tr`
display: grid;
grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 2fr) minmax(150px, 2fr) minmax(150px, 2fr) minmax(150px, 4fr) ;
`
const Header = styled.th`
cursor: pointer;
`

const TableWrapper = styled.table`

width: 1200px;
padding: 40px 120px;
table-layout: fixed;
margin: 0 auto;

th, td {
  padding: 0.25rem;
  text-align: left;
  border: 1px solid #ccc;
}

tbody tr:nth-child(odd) {
  background: #eee;
}
//display: flex;
//flex-direction: column;
//justify-content:center;
//align-content: center;
`



export default Table;