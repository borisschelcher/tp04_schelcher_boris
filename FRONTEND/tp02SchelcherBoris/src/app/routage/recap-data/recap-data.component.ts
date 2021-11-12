import { Component, OnInit,Pipe } from '@angular/core';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';
import { RefactorNumberPipe } from '../../refactor-number.pipe';

@Component({
  selector: 'app-recap-data',
  templateUrl: './recap-data.component.html',
  styleUrls: ['./recap-data.component.css']
})
export class RecapDataComponent implements OnInit {
  public user : User = new User("","","",0,"","","","","","","","")
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
