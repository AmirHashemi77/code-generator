interface DataTableColumn {
  field: string;
  header: string;
  format?: string;
}

type RowActionType = "navigateTo" | "callApi";

export interface RowAction {
  icon: string;
  action: RowActionType;
  path?: string; // برای navigateTo
  endpoint?: string; // برای callApi
  confirm?: string; // اختیاری برای callApi
}

export interface DataTableProperties {
  dataSource: string;
  columns: DataTableColumn[];
  rowActions?: RowAction[];
}
