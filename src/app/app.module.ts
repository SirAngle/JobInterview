import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FloatingWrapperComponent } from './floating-wrapper/floating-wrapper.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { AvailableMoneyTradeComponent } from './pages/available-money-trade/available-money-trade.component';
import { JoinComponent } from './pages/join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainbodyComponent,
    WrapperComponent,
    FloatingWrapperComponent,
    JoinNowComponent,
    AvailableMoneyTradeComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
