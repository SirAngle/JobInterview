import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableMoneyTradeComponent } from './pages/available-money-trade/available-money-trade.component';
import { JoinComponent } from './pages/join/join.component';

const routes: Routes = [
  { path: '', component: AvailableMoneyTradeComponent },
  { path: 'join', component: JoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
