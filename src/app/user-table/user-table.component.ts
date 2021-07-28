import {Component, OnInit} from '@angular/core';
import {User} from "../service/user";
import {UserInfoService} from "../service/user-info.service";
import {Router} from "@angular/router";
import {CommonService} from "../service/common.service";


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userData: User[] = []

  // pagination variables
  totalPage!: string
  pageNo: number = 1

  // get from search box
  firstName!: string
  lastName!: string
  key = 'id'
  reverse: boolean = false
  constructor(private userService: UserInfoService, private route: Router, private commonService: CommonService) {
  }

  // subscribing to service
  ngOnInit() {
    this.userService.getData().subscribe((data) => {
      this.userData = data
      this.totalPage = String(data.length)
    })
  }


  // Searching and filtration
  searchByFirstName() {
    if (this.firstName == '') {
      this.ngOnInit()
    } else {
      this.userData = this.userData.filter( res => {
        return res.first_name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }

  searchByLastName() {
    if (this.lastName == '') {
      this.ngOnInit()
    } else {
      this.userData = this.userData.filter( res => {
        return res.last_name.toLocaleLowerCase().match(this.lastName.toLocaleLowerCase())
      })
    }
  }

  // navigate to user Profile
  userProfileLink(id: number) {
    this.route.navigate(['user', id])
    this.commonService.changeData(this.userData.filter((x) => x.id === id)[0])
  }

  sort(key: string) {
    this.key = key
    this.reverse = !this.reverse
  }

}
