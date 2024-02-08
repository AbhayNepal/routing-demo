import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/employee-list',
        pathMatch:'full'
    },
    
    {
        path:'',
        component:AppComponent
    },

    {
        path:'employee-list',
        component:EmployeeListComponent
    },
    {
        path:'employee-list/:id',
        component:EmployeeDetailComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];
