import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl(''),
    message: new FormControl('', Validators.required)
  })

  get name(){ return this.contactForm.get('name')}
  get email(){ return this.contactForm.get('email')}
  get message(){ return this.contactForm.get('message')}
  get phone(){ return this.contactForm.get('phone')}

  constructor() { }

  ngOnInit(): void {
  }

}
