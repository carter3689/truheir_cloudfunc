import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  subscriptionFormModalName = new FormControl('', Validators.required);
  subscriptionFormModalEmail = new FormControl('', Validators.email);





  submitForm(name,email){
    console.log(name,email)
  }

  //Contact Form Modal
contactFormModalName = new FormControl('', Validators.required);
contactFormModalEmail = new FormControl('', Validators.email);
contactFormModalSubject = new FormControl('', Validators.required);
contactFormModalMessage = new FormControl('', Validators.required);


constructor(private fun: AngularFireFunctions) { }

submitContact(name,email,subject,message){
  const callable = this.fun.httpsCallable('genericEmail')
  callable({
    name:name
  }).subscribe()
  console.log(name,email,subject,message)
}
ngOnInit() {
  }

}
