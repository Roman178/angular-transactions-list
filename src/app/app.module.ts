import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { SummaryComponent } from "./summary/summary.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { transactionsReducer } from "./store/app.reducers";
import { EffectsModule } from "@ngrx/effects";
import { DataEffects } from "./store/app.effects";
import { HttpService } from "./http.service";

const routes: Routes = [
  { path: "navigator", component: ListComponent },
  { path: "", component: SummaryComponent },
];

@NgModule({
  declarations: [AppComponent, ListComponent, SummaryComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([DataEffects]),
    StoreModule.forRoot({ transactionsState: transactionsReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
