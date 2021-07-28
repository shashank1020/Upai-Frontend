import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "./user";

@Injectable()
export class CommonService {

  // Contains User profile when navigating from one component to other
  private data = new BehaviorSubject(new User());
  data$ = this.data.asObservable();

  changeData(data: User) {
    this.data.next(data)
  }
}
