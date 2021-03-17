import {DataInterface, DataInterfaceWithChildren} from "../components/Table/Table";
import {useMemo} from "react";

export const useChildrenSort = (tableData: DataInterface[]): DataInterfaceWithChildren[] => {
  const parentElements = tableData.filter((dataElement) => dataElement.parentId === 0);
  const parentsWithChildren = useMemo(() => {
    const parents = parentElements.map(
      (parentElem) => {
        const childrenElements = tableData.filter((childElem) => childElem.parentId === parentElem.id);
        return { ...parentElem, childElements: childrenElements}
      }
    );
    return parents
  }
, []);

  return parentsWithChildren

}