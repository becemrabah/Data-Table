import { Component, Input } from '@angular/core';
import { TableColumn } from '../../../models/table-column.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent<T extends Record<string, any>> {
  @Input() data: T[] = [];
  @Input() columns: TableColumn<T>[] = [];
  @Input() loading = false;

  currentPage = 1;
  pageSize = 10;
  pageSizeOptions = [10, 25, 50];
  sortKey: keyof T | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  sort(column: keyof T): void {
    if (this.sortKey === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = column;
      this.sortDirection = 'asc';
    }
  }
  get sortedData(): T[] {
    if (!this.sortKey) return this.data;

    return [...this.data].sort((a, b) => {
      const aValue = a[this.sortKey!];
      const bValue = b[this.sortKey!];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();

      if (aStr < bStr) return this.sortDirection === 'asc' ? -1 : 1;
      if (aStr > bStr) return this.sortDirection === 'asc' ? 1 : -1;

      return 0;
    });
  }
  get totalPages(): number {
    return Math.ceil(this.sortedData.length / this.pageSize);
  }

  get paginatedData(): T[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.sortedData.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  changePageSize(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
  }
  onPageSizeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.changePageSize(Number(value));
  }
}
