import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  // templateUrl: './employee-list.component.html',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
   employees = [
    {
      "id":1,"name":"Angular"
    },{
      "id":2,"name":"Java"
    }
  ]
  private router:Router

  constructor(){
    this.router = new Router()
  }
  onSelect(employee: { id: any; }){
      this.router.navigate(['/employee',employee.id])
  }

 
}
