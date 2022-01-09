import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as _actions from "./store/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(_actions.loadData());
  }
}
