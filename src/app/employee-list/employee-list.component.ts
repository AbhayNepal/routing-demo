import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
  private route:ActivatedRoute;
  public selectedId;
  constructor(){
    this.router = inject(Router)
    this.route = inject(ActivatedRoute)
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.selectedId = parseInt(id!);
    });
  }
  onSelect(employee: { id: any; }){
      // this.router.navigate(['/employee',employee.id])
      this.router.navigate([employee.id],{relativeTo:this.route})
  }
  isSelected(employee){
    return employee.id === this.selectedId;
  }
 
}
