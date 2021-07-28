import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  url: string
  constructor(private http: HttpClient) {
    this.url = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
  }
  // fetch data from API
  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
}
