import {
    ConfigInterface,
    DataInterface,
    DataInterfaceWithChildren,
    OrderType,
    SortKeysType
} from "../components/Table/Table";
import {useCallback, useMemo, useState} from "react";

interface UseSortInterface {
    items: DataInterfaceWithChildren[]
    setSort: (key: SortKeysType) => void
}

export const useSortData = (tableData: DataInterfaceWithChildren[], config: ConfigInterface | null = null): UseSortInterface => {


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