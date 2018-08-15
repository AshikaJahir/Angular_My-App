import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private _employeeService: EmployeeService) { }
  //on loading it will get the EmployeeService and associate it to _employeeService
  ngOnInit() {
    this.employees = this._employeeService.getEmployees(); 
    //This calls the getEmployees method and return the associated data to the employees property defined here
  }

}
