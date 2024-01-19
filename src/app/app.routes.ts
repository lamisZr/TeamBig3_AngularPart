import { Routes } from '@angular/router';
import { StocksListComponent } from "./stocks-list/stocks-list.component";


export const routes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  { path: 'stock', component: StocksListComponent }
];

