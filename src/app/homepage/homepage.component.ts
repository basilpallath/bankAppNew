import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

user:any
lDate:any
acno:any


  // deposit group model creation
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],


  })
  // withdraw group model creation
  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],


  })







  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) { 
    this.user = this.ds.currentUname
    this.lDate =new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("pls login")
      this.router.navigateByUrl("")
    }
  
  }
  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno
      var pswd = this.depositForm.value.pswd
      var amount = this.depositForm.value.amount
      const result = this.ds.deposit(acno, pswd, amount)
      if (result) {
        alert(amount + "successfully deposited and new balance is" + result)

      }
    } else {
      alert("Invalid Form")
    }


  }

  withdraw() {
    if (this.withdrawForm.valid) {
      var acno = this.withdrawForm.value.acno1
      var pswd = this.withdrawForm.value.pswd1
      var amount = this.withdrawForm.value.amount1
      const result = this.ds.withdraw(acno, pswd, amount)
      if (result) {
        alert(amount + "successfully debited and new balance is" + result)


      }

    } else {
      alert("Invalid Form")
    }


  }
  logout(){

    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUname")
    this.router.navigateByUrl("")
  
  }
  deleteMyAccount(){
    this.acno = JSON.parse(localStorage.getItem("currentAcno") ||'')
  }
  cancel(){
    this.acno =""
  }
  delete(event:any){
    alert("Delete account" +event+"from parent")
    this.router.navigateByUrl("")
  }
}