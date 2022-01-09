import { Component } from "@angular/core";
import { ITransaction } from "../http.service";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
})
export class SummaryComponent {
  transactionsState$: Observable<any>;

  transactionTypes: string[] = [];
  transactions: ITransaction[] = [];

  constructor(private store: Store<{ transactionsState: any }>) {
    this.transactionsState$ = store.pipe(select("transactionsState"));
    this.transactionsState$.subscribe((state) => {
      this.transactions = state.transactions;
      this.transactionTypes = state.transactionTypes;
    });
  }

  calculateTransactions(transactionType: string) {
    return this.transactions.filter((t) => t.type === transactionType).length;
  }
}
