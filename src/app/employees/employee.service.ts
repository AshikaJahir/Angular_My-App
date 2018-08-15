import  { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [ 
        {
          id: 1,
          name: 'Allison Cameron',
          gender: 'Female',
          email:'cameron@gmail.com',
          contactPreference: 'Email',
          dateOfBirth: new Date('10/14/1995'),
          department: 'Nutrition',
          isActive: true,
          photoPath: 'assets/images/Cameron.jpg'
        },
        {
          id: 2,
          name: 'Robert Chase',
          gender: 'Male',
          phoneNumber:9845632515,
          contactPreference: 'Phone',
          dateOfBirth: new Date('10/22/1999'),
          department: 'NICU',
          isActive: true,
          photoPath: 'assets/images/Chase.jpg'
        },
        {
          id: 3,
          name: 'Eric Foreman',
          gender: 'Male',
          email:'foreman@gmail.com',
          contactPreference: 'Email',
          dateOfBirth: new Date('09/14/1998'),
          department: 'Neurology',
          isActive: true,
          photoPath: 'assets/images/Foreman.jpg'
        }
        
    ]

      getEmployees():Employee[]{
          return this.listEmployees;
      }

      save(employee:Employee){
          this.listEmployees.push(employee);
      }

}