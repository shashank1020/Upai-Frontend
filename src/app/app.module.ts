import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {UserComponent} from './user/user.component';

import {UserTableComponent} from './user-table/user-table.component';
import {CommonService} from "./service/common.service";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";
import {Ng2OrderModule} from "ng2-order-pipe";



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,

    FormsModule,
    Ng2OrderModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
