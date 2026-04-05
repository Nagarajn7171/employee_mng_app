import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  http= inject(HttpClient)
  apiUrl:string="https://localhost:7243/api/"
  getAllDept(){
    return this.http.get(this.apiUrl+"DepartmentMaster/GetAllDepartments")
  }
  getAllDesign(){
     return this.http.get(this.apiUrl+"DepartmentMaster/GetAllDepartments")
  }

}

