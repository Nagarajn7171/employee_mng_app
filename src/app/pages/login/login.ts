import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj:any={
  email:'',
  contactNo:''
}
http=inject(HttpClient)
router=inject(Router);
onLogin(){
  debugger;
  this.http.post("https://localhost:7243/api/EmpMaster/login",this.loginObj).subscribe({
    next:(res:any)=>{
     debugger;
      localStorage.setItem('empLoginuser',JSON.stringify(res.data));
     this.router.navigateByUrl("dashboard")
    
    },
    
   error:(err:any)=>{
  debugger
   }
   
  })
}
}
