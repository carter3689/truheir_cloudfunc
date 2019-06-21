import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

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

submitContact(name,email,subject,message){
  console.log(name,email,subject,message)
}

  constructor() { }

  ngOnInit() {
  }

}
