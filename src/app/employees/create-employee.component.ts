import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService} from './employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  employee :Employee = {
      id: null,
      name: null,
      gender: null,
      phoneNumber:null,
      contactPreference: null,
      dateOfBirth: null,
      department: '-1',
      isActive: null,
      photoPath: null
  };
  departments : Department[] = [
    {id:1 , name:'Neurology' },
    {id:2 , name:'NICU' },
    {id:3 , name:'Nutrition' },
    {id:4 , name:'Patient History' },
    {id:5 , name:'Diagnostics' },
    {id:6 , name:'Oncology' },
  ];
  constructor(private _employeeService:EmployeeService, 
              private _router:Router) { }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
  //Here we passes the Native Form Model 
  //saveEmployee(empForm : NgForm) : void{
  //  console.log(empForm);
 // }
 //Here we passes the our own Employee Model 
  //saveEmployee(newEmployee: Employee) : void{
 //   console.log(newEmployee);
  //}

  //Here we use service 
  saveEmployee() : void{
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

}
