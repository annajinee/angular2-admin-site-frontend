import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { InvoiceListComponent } from './invoices/index';
import { InvoiceNotDeliveredListComponent } from './invoices/index';
import { AuthGuard } from "./_guards/auth.guard";
import { NoticeComponent } from "./notice/notice-list/notice.component";
import { TrackingComponent } from "./statics/tracking/tracking.component";
import { DeliveredComponent } from "./statics/delivered/delivered.component";
import { NotdeliveredComponent } from "./statics/notdelivered/notdelivered.component";
import { Observable } from "rxjs";
import { NavigationService } from "./services/navigation.service";
import { NoticeaddComponent } from "./notice/notice-add/noticeadd.component";
import { NoticedetailComponent } from "./notice/notice-detail/noticedetail.component";
export var RouteComponent = (function () {
    function RouteComponent(changeRef, appRef) {
        this.changeRef = changeRef;
        this.appRef = appRef;
        this.hasChanges = true;
    }
    RouteComponent.prototype.canDeactivate = function () {
        console.log("Detecting changes. Has Changes: " + this.hasChanges);
        return Observable.of(!this.hasChanges);
    };
    RouteComponent.prototype.ngOnInit = function () {
    };
    return RouteComponent;
}());
var appRoutes = [
    { path: 'home', component: NoticeComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'notice/add', component: NoticeaddComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'notice/detail/:id', component: NoticedetailComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'login', component: LoginComponent, canDeactivate: [NavigationService] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'invoice/delivered', component: InvoiceListComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'invoice/notdelivered', component: InvoiceNotDeliveredListComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'static/tracking', component: TrackingComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'static/delivered', component: DeliveredComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    { path: 'static/notdelivered', component: NotdeliveredComponent, canActivate: [AuthGuard], canDeactivate: [NavigationService] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=/Users/annakim/Desktop/trackingadmin/TrackingAdminFront/src/app/app.routing.js.map