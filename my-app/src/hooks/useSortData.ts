import {DataInterface, SortKeysType} from "../components/Table/Table";

export const useSortData = (tableData: DataInterface[], sortConfig: SortKeysType | null) => {
    const tableDataCopy = [...tableData];
    const sortFunction = (a:DataInterface, b:DataInterface) => {
        if (!sortConfig) return 0
        return a[sortConfig] > b[sortConfig] ? 1 : -1
    }
    const sortedTableData = tableDataCopy.sort(sortFunction)
}