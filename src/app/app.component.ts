import { Component } from '@angular/core';
import { User } from './new-user/new-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[];

  constructor() {
    this.users = [ new User('Mario','Mario','Mario','Mario')];
  }

  addUser(newUserName: HTMLInputElement , newEmail: HTMLInputElement, newInfo: HTMLInputElement, newAvatar: HTMLInputElement){

    this.users.push(new User(newUserName.value, newEmail.value, newInfo.value, newAvatar.value))
    return false;
  }

}
