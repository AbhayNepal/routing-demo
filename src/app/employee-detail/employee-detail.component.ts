import { HttpParams } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
  public employeeId;
  private route:ActivatedRoute;
  private router:Router;
  
  constructor(){
    this.route = inject(ActivatedRoute)
    this.router = inject(Router)
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.employeeId = parseInt(id!);
    });
  }
  
  goPrevious(){
    let previousId = this.employeeId -1;
    this.router.navigate([previousId],{relativeTo:this.route})
  }
  
  goNext(){
    let nextId = this.employeeId + 1;
    // this.router.navigate(['/employee',nextId])
    this.router.navigate([nextId],{relativeTo:this.route})
  }
  gotoDepartments() {
    let selectedId = this.employeeId? this.employeeId :null;
    this.router.navigate(['../',{id:selectedId,test:'testvalue'}],{relativeTo:this.route})
  }
}
