import React, { CSSProperties, useState } from 'react';
import { DataInterfaceWithChildren, RowWrapper } from "../Table";
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
      <td><strong>{data.name}</strong> <span style={{color: 'black', fontSize: 16}}>{fingerElem}</span></td>
      <td>{data.isActive.toString()}</td>
      <td>{data.balance}</td>
      <td>{data.email}</td>
  </RowWrapper>
  <ChildrenWrapper hidden={!showChildren}>{childrenRows}</ChildrenWrapper>
  </>
 );
};


const ChildrenWrapper = styled.div`
td, td {
background-color: rgba(88,88,88, 0.22);
}

`

export default Row;