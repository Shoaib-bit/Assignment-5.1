import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
    constructor(public studentData : StudentService) {

    }
}
