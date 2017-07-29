import {Component,OnInit,Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  login(user: HTMLInputElement, pass: HTMLInputElement): boolean {

    let valid = user.value =='mario' && pass.value =='pass' ? alert('pase') : alert('error');

    return false;
  }

}
