import {Component, OnInit} from '@angular/core';
import {User} from "../service/user";
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User
  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.data$.subscribe(res => this.user = res)
  }

}
