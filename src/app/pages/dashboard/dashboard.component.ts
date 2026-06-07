import { Component } from '@angular/core';
import { User } from '../../models/user.interface';
import { TableColumn } from '../../models/table-column.interface';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  users: User[] = [
    { id: 1, name: 'Ahmed', email: 'ahmed@example.com', status: 'Active' },
    { id: 2, name: 'John', email: 'john@example.com', status: 'Active' },
    { id: 3, name: 'Jane', email: 'jane@example.com', status: 'Inactive' },
    { id: 4, name: 'Alex', email: 'alex@example.com', status: 'Active' },
    { id: 5, name: 'Ali', email: 'ali@example.com', status: 'Active' },
    { id: 6, name: 'Salah', email: 'salah@example.com', status: 'Active' },
    { id: 7, name: 'Mohamed', email: 'mohamed@example.com', status: 'Active' },
    { id: 8, name: 'Stefane', email: 'stefane@example.com', status: 'Active' },
    { id: 9, name: 'Ahmed', email: 'ahmed2@example.com', status: 'Inactive' },
    { id: 10, name: 'Andria', email: 'andria@example.com', status: 'Active' },
    { id: 11, name: 'Ina', email: 'ina@example.com', status: 'Active' },
  ];

  columns: TableColumn<User>[] = [
    {
      key: 'id',
      label: 'ID',
      sortable: true,
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      isBadge: true,
    },
  ];
}
