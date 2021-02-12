import {ConfigInterface, DataInterface, SortKeysType} from "../components/Table/Table";
import {useEffect, useState} from "react";

export const useSortData = (tableData: DataInterface[], sortConfig: ConfigInterface | null, setSortConfig: any): DataInterface[] => {
    debugger;
    const [config, setConfig] = useState<SortKeysType | null>(null);

    useEffect(() => {
        if (!sortConfig) return;
        setConfig(key);
        setSortConfig((prevConfig: ConfigInterface) => {
            if (prevConfig.order === 'ascending') return ({key, order: "ascending"})
            return ({key, order: "descending"})
        })
    }, [sortConfig])

    if (!sortConfig) return tableData;

    const {key, order} = sortConfig;
    // if (!order)
    const tableDataCopy = [...tableData];
    const sortFunction = (a:DataInterface, b:DataInterface) => {
        if (!sortConfig) return 0
        if (config === key) return a[key] < b[key] ? 1 : -1
        return a[key] > b[key] ? 1 : -1
    }
    const sortedTableData = tableDataCopy.sort(sortFunction)




    return sortedTableData
}