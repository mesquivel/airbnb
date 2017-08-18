import {Component,OnInit,Input,        HostBinding } from '@angular/core';
import { User } from './new-user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  @Input() newUser: User;

  ngOnInit() {
  }

}
