import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  newEntry = {
    name: '',
    age: null,
    email: ''
  };

  // Array to store table entries
  entries: any[] = [];

  // Method to add a new entry to the table
  addEntry() {
    // Add the new entry to the entries array
    this.entries.push({ ...this.newEntry });

    // Clear the input fields
    this.newEntry = {
      name: '',
      age: null,
      email: ''
    };
  }
  
}
