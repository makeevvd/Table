import React from 'react';
import {DataInterface} from "../Table";



interface Props {
    data: DataInterface
}

const Row: React.FC<Props> = ({data}) => {
 return (
  <tr>
      <td>{data.id}</td>
      <td>{data.parentId}</td>
      <td>{data.isActive.toString()}</td>
      <td>{data.balance}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
  </tr>
 );
};

export default Row;