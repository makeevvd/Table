import React from 'react';
import {DataInterface, RowWrapper} from "../Table";
import styled from "styled-components";



interface Props {
    data: DataInterface
}

const Row: React.FC<Props> = ({data}) => {
 return (
  <RowWrapper>
      {/*<Cell>{data.id}</Cell>*/}
      {/*<Cell>{data.parentId}</Cell>*/}
      <Cell>{data.name}</Cell>
      <Cell>{data.isActive.toString()}</Cell>
      <Cell>{data.balance}</Cell>
      <Cell>{data.email}</Cell>
  </RowWrapper>
 );
};

const Cell = styled.td`
//text-align: center;
`

export default Row;