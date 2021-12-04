import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from '../app/components/topbar/topbar.component';
import { MainbodyComponent } from '../app/components/mainbody/mainbody.component';
import { WrapperComponent } from '../app/components/wrapper/wrapper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FloatingWrapperComponent } from '../app/components/floating-wrapper/floating-wrapper.component';
import { AvailableMoneyTradeComponent } from './pages/available-money-trade/available-money-trade.component';
import { JoinComponent } from './pages/join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainbodyComponent,
    WrapperComponent,
    FloatingWrapperComponent,
    AvailableMoneyTradeComponent,
    JoinComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
