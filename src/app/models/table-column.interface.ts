export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  isBadge?: boolean;
}
