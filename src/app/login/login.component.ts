import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner"
  accno = "Account Number Please.."
  acno = ""
  pswd = ""
  // login group model creation
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })

  database: any = {
    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "Vyom", password: 1001, balance: 5000 },
    1002: { acno: 1002, uname: "Laisha", password: 1002, balance: 5000 },

  }


  constructor(private routerLogin: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno)

  }
  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);


  }


  //   Login(a:any,p:any) {

  //     console.log(a);

  //     var acno = a.value
  //     var pswd = p.value
  //     let database = this.database
  //     if (acno in database) {

  //       if (pswd == database[acno]["password"]) {
  //         alert("Login Successful")
  //       }
  //       else {
  //         alert("Incorrect Password")
  //       }
  //     }
  //     else {
  //       alert("User Doesnot Exsist")
  //     }
  //   }

  // }

  // Login() {
  //   var acno = this.acno
  //   var pswd = this.pswd
  //   let database = this.ds.database
  //   if (acno in database) {

  //     if (pswd == database[acno]["password"]) {
  //       alert("Login Successful")
  //       this.routerLogin.navigateByUrl("homepage")
  //     }
  //     else {
  //       alert("Incorrect Password")

  //     }
  //   }
  //   else {
  //     alert("User Doesnot Exsist")
  //   }
  // }
  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    if (this.loginForm.valid) {

      const result = this.ds.Login(acno, pswd)
      if (result) {
        alert("login succesful")
        this.routerLogin.navigateByUrl("homepage")
      }
    } else {
      alert("Invalid Form")
    }

  }

}


