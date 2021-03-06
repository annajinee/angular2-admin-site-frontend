import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing}        from './app.routing';
import {AppComponent}  from './app.component';

// 모달 - 배송조회, 미배송 조회 :: 상세보기
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

// 페이징
import {PaginationComponent} from './pagination';

// 데이터피커
import {MomentModule} from 'angular2-moment';

// 컴포넌트 및 서비스
import {AlertComponent} from './directives/index';
import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, UserService} from './services/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import { NoticeComponent } from './notice/notice-list/notice.component';
import {TrackingComponent} from './statics/tracking/tracking.component';
import { DeliveredComponent } from './statics/delivered/delivered.component';
import {NotdeliveredComponent} from "./statics/notdelivered/notdelivered.component";
import {StaticService} from "./services/static.service";
import { ChartModule } from 'angular2-chartjs';
import {DateTimePickerDirective} from "ng2-eonasdan-datetimepicker/dist/datetimepicker.directive";
import {NoticeService} from "./services/notice.service";
import {NavigationService} from "./services/navigation.service";
import {NoticeaddComponent} from "./notice/notice-add/noticeadd.component";
import {NoticedetailComponent} from "./notice/notice-detail/noticedetail.component";
import {AddCommaFormat, AddCommaFormatNumber} from "./pipe/addcomma";
import {InvoiceListComponent} from "./invoices/invoices-list/invoices-list.component";
import {InvoiceNotDeliveredListComponent} from "./invoices/invoices-nonelist/invoices-nonelist.component";
import {InvoiceService} from "./services/invoice.service";


  @NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MomentModule,
    ChartModule,
    Ng2Bs3ModalModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    InvoiceListComponent,
    InvoiceNotDeliveredListComponent,
    PaginationComponent,
    NoticeComponent,
    TrackingComponent,
    DeliveredComponent,
    NotdeliveredComponent,
    DateTimePickerDirective,
    NoticeaddComponent,
    NoticedetailComponent,AddCommaFormat,
    AddCommaFormatNumber
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    InvoiceService,
    StaticService,
    NoticeService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
