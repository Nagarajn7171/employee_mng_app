import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Deshboard } from './pages/deshboard/deshboard';
import { EmployeeForm } from './pages/employee-form/employee-form';
import { Header } from './pages/header/header';
import { EmployeeList } from './pages/employee-list/employee-list';
import { Department } from './pages/department/department';
import { Designation } from './pages/designation/designation';

export const routes: Routes = [
 {
    path:'',
    component:Login,
    pathMatch:'full'
 },
 {path:'login',component:Login},
 {path:'',component:Header,
    children:[
        {
            path:'dashboard',
            component:Deshboard
        },
        {
            path:'new-employee',
            component:EmployeeForm
        },
        {
            path:'employees',
            component:EmployeeList
        },
        {
            path:'departments',
            component:Department
        },
        {
            path:'designations',
            component:Designation
        }
    ]
 }
];
