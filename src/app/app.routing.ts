import {Routes, RouterModule} from '@angular/router';
// import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
// import {AuthGuard} from './_guards/index';
import {InvoiceListComponent} from './invoices/index'
import {InvoiceNotDeliveredListComponent} from './invoices/index'
import {AuthGuard} from "./_guards/auth.guard";
import {NoticeComponent} from "./notice/notice-list/notice.component";
import {TrackingComponent} from "./statics/tracking/tracking.component";
import {DeliveredComponent} from "./statics/delivered/delivered.component";
import {NotdeliveredComponent} from "./statics/notdelivered/notdelivered.component";
import {OnInit, ChangeDetectorRef, ApplicationRef} from "@angular/core";
import {Observable} from "rxjs";
import {NavigationService} from "./services/navigation.service";
import {NoticeaddComponent} from "./notice/notice-add/noticeadd.component";
import {NoticedetailComponent} from "./notice/notice-detail/noticedetail.component";




export class RouteComponent implements OnInit {
  public hasChanges: boolean = true;

  constructor(private changeRef: ChangeDetectorRef, private appRef: ApplicationRef) {}

  canDeactivate() {
    console.log("Detecting changes. Has Changes: " + this.hasChanges);
    return Observable.of(!this.hasChanges);
  }

  ngOnInit() {
  }
}

const appRoutes: Routes = [
  
  {path: 'home', component: NoticeComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] },
  {path: 'notice/add', component: NoticeaddComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] },
  {path: 'notice/detail/:id', component: NoticedetailComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] },
  {path: 'login', component: LoginComponent, canDeactivate: [ NavigationService ] },
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] },
  {path: 'invoice/delivered', component: InvoiceListComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] }, // 배송 조회
  {path: 'invoice/notdelivered', component: InvoiceNotDeliveredListComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ]}, // 미배송 조회
  {path: 'static/tracking', component: TrackingComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] }, // 추적건수 통계
  {path: 'static/delivered', component: DeliveredComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] }, // 배송율 통계
  {path: 'static/notdelivered', component: NotdeliveredComponent, canActivate: [AuthGuard], canDeactivate: [ NavigationService ] }, // 미배송율 통계

  // otherwise redirect to home
  {path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
