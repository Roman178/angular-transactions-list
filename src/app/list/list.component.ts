import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { HttpService, ITransaction } from "../http.service";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  providers: [HttpService],
})
export class ListComponent {
  transactionsState$: Observable<any>;

  currentTab: number = NaN;
  currentTransactionType: string = "";
  transactionTypes: string[] = [];
  transactions: ITransaction[] = [];
  querySubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ transactionsState: any }>
  ) {
    this.transactionsState$ = store.pipe(select("transactionsState"));
    this.transactionsState$.subscribe((state) => {
      this.transactions = state.transactions;
      this.transactionTypes = state.transactionTypes;
      this.currentTransactionType = this.transactionTypes[this.currentTab];
    });

    this.querySubscription = this.route.queryParams.subscribe((param: any) => {
      this.currentTab = parseInt(param["tab"]);
      this.currentTransactionType = this.transactionTypes[this.currentTab];
    });
  }

  filterTransactions(transaction: ITransaction): boolean {
    return this.currentTransactionType
      ? transaction.type === this.currentTransactionType
      : true;
  }
}
