import {ConfigInterface, DataInterface, OrderType, SortKeysType} from "../components/Table/Table";
import React, {useCallback, useEffect, useMemo, useState} from "react";

interface UseSortInterface {
    items: DataInterface[]
    setSort: (key: SortKeysType) => void
}
// export const useSortData = (tableData: DataInterface[], sortConfig: ConfigInterface | null, setSortConfig: any): DataInterface[] => {
export const useSortData = (tableData: DataInterface[], config: ConfigInterface | null = null): UseSortInterface => {
    debugger;
    // const [config, setConfig] = useState<SortKeysType | null>(null);
    //
    // useEffect(() => {
    //     if (!sortConfig) return;
    //     setConfig(key);
    //     setSortConfig((prevConfig: ConfigInterface) => {
    //         if (prevConfig.order === 'ascending') return ({key, order: "ascending"})
    //         return ({key, order: "descending"})
    //     })
    // }, [sortConfig])
    //
    // if (!sortConfig) return tableData;
    //
    // const {key, order} = sortConfig;
    // // if (!order)
    // const tableDataCopy = [...tableData];
    // const sortFunction = (a:DataInterface, b:DataInterface) => {
    //     if (!sortConfig) return 0
    //     if (config === key) return a[key] < b[key] ? 1 : -1
    //     return a[key] > b[key] ? 1 : -1
    // }
    // const sortedTableData = tableDataCopy.sort(sortFunction)

    const [sortConfig, setSortConfig] = useState(config);

    const sortItems = useCallback((a:DataInterface, b:DataInterface) => {
        if (sortConfig !== null) {
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.order === "ascending" ? 1 : -1
            }
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.order === "ascending" ? -1 : 1
            }
        }
        return 0
    }, [sortConfig]);


    const sortedTableData = useMemo(() => {
        const tableDataCopy = [...tableData];
        const sortedTableData = tableDataCopy.sort(sortItems);
        return sortedTableData
    }, [tableData, sortItems]);

    const setSort = (key: SortKeysType) => {
        let order: OrderType  = "ascending";
        if (sortConfig?.key === key && sortConfig.order === "ascending") {
            order = "descending"
        }
        setSortConfig({key, order})
    }


    return {items: sortedTableData, setSort}
}