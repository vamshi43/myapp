import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  foods = [
    {value: 'Hero-0', viewValue: 'Hero'},
    {value: 'heroine-1', viewValue: 'heroine'},
    {value: 'Dancer-2', viewValue: 'Dancer'},
    {value: 'Comedian-3', viewValue: 'Comedian'},
    {value: 'Director-4', viewValue: 'Director'},
    {value: 'Producer-5', viewValue: 'Producer'},
    {value: 'Writer-6', viewValue: 'Writer'},
  ];


states = [
  {value: 'andrapradesh-0', viewValue: 'Andrapradesh'},
  {value: 'telangana-1', viewValue: 'Telangana'},
  {value: 'karnataka-2', viewValue: 'Karnataka'},
  {value: 'tamilnadu-3', viewValue: 'Tamilnadu'},
  {value: 'uttarpradesh-4', viewValue: 'Uttarpradesh'},
  {value: 'maharastra-5', viewValue: 'Maharastra'},
  {value: 'jammu&kashmir-6', viewValue: 'Jammu & Kashmir'},
];

nationalitys = [
  {value: 'american-0', viewValue: 'American'},
  {value: 'chinese-1', viewValue: 'Chinese'},
  {value: 'australian-2', viewValue: 'Australian'},
  {value: 'brazilian-3', viewValue: 'Brazilian'},
  {value: 'european-4', viewValue: 'European'},
  {value: 'greek-5', viewValue: 'Greek'},
  {value: 'indian-6', viewValue: 'Indian'},
];

}


