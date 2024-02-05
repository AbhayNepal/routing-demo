import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
constructor(){
  this.route = inject(ActivatedRoute)
  this.employeeId = parseInt(this.route.snapshot.params['id']);
}

}
