import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Master } from '../../Services/master';
import { form } from '@angular/forms/signals';
import { departmentModel } from '../../Models/departmentModel';



@Component({
  selector: 'app-department',
  imports: [FormsModule,NgIf],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit  {
  
  deptObj:departmentModel=new departmentModel();
 
 masterSrv=inject(Master)
 deptList=signal<departmentModel[]>([])

 ngOnInit(): void {
  debugger
   this.getAllDept()
 }

 getAllDept(){
  debugger
  this.masterSrv.getAllDept().subscribe({
    next:(res:any)=>{
      debugger
      this.deptList=res;
    },error:(err:any)=>{
      debugger
      alert("Error To fetch Departement Details" + err)
    }
  })
 }
 submit(){

 }
 edit(deptid:number){

 }
 delete(deptid:number){

 }
 reset(){
  
 }
}
