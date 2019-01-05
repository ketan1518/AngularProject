import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {  AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule} from '@angular/router';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyorderComponent } from './myorder/myorder.component';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    BgNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminComponent,
    AdminOrdersComponent,
    MyorderComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([

   { path : '' , component: HomeComponent},
   {path : 'login' , component: LoginComponent},
   {path: 'products' , component: ProductsComponent},

   {path: 'shopping-cart' , component: ShoppingCartComponent },

   {path: 'check-out' , component: CheckOutComponent, canActivate: [AuthGuardService]},
   {path: 'order-succses' , component: OrderSuccessComponent, canActivate: [AuthGuardService]},

   {path : 'admin/products' , component : AdminComponent , canActivate: [AuthGuardService]},
   {path : 'admin/orders' , component: AdminOrdersComponent , canActivate: [AuthGuardService]},

   {path: 'my/order' , component: MyorderComponent, canActivate: [AuthGuardService]}



    ])
  ],
  providers: [AuthService,
    AuthGuardService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
