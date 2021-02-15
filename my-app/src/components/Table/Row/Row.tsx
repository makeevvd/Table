import React, {CSSProperties, useState} from 'react';
import {DataInterface, DataInterfaceWithChildren, RowWrapper} from "../Table";
import styled from "styled-components";



interface Props {
    data: DataInterfaceWithChildren
    style?: CSSProperties
}

const Row: React.FC<Props> = ({data}) => {
  const [showChildren, setShowChildren] = useState(false);
  const hasChildren = data.childElements !== undefined && data.childElements.length > 0;
  debugger;
  const childrenRows = data.childElements?.map((el) => <Row key={el.id} data={el} />);
  let fingerElem;
  if (hasChildren) {
    fingerElem = showChildren ? `⮝` : '⮟';
  }

 return (
   <>
  <RowWrapper onClick={() => setShowChildren((state) => !state)}>
      {/*<Cell>{data.id}</Cell>*/}
      {/*<Cell>{data.parentId}</Cell>*/}
      <Cell><strong>{data.name}</strong> <span style={{color: 'black', fontSize: 16}}>{fingerElem}</span></Cell>
      <Cell>{data.isActive.toString()}</Cell>
      <Cell>{data.balance}</Cell>
      <Cell>{data.email}</Cell>
  </RowWrapper>
  <ChildrenWrapper hidden={!showChildren}>{childrenRows}</ChildrenWrapper>
  </>
 );
};

const Cell = styled.td`
//text-align: center;
`

const ChildrenWrapper = styled.div`
td, td {
background-color: rgba(88,88,88, 0.22);
}

`

export default Row;