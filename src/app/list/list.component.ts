import { Component, OnInit, DoCheck, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpService, ITransaction } from "../http.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  providers: [HttpService],
})
export class ListComponent implements OnInit, DoCheck {
  private transactionTypesSet: Set<string> = new Set();
  currentTab: number = NaN;
  currentTransactionType: string = "";
  // currentTab: string = "";

  transactionTypes: string[] = [];
  transactions: ITransaction[] = [];
  querySubscription: Subscription;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.querySubscription = this.route.queryParams.subscribe((param: any) => {
      this.currentTab = parseInt(param["tab"]);
      this.currentTransactionType = this.transactionTypes[this.currentTab];
    });
  }

  private setTransactionTypes(transactionsSet: Set<string>): void {
    this.transactionTypes = [...transactionsSet];
  }

  ngOnInit(): void {
    this.httpService.getData().subscribe((data: any) => {
      this.transactions = data;
      data.forEach((t: ITransaction) => {
        this.transactionTypesSet.add(t.type);
      });
      this.setTransactionTypes(this.transactionTypesSet);
      if (!this.currentTransactionType) {
        this.currentTransactionType = this.transactionTypes[this.currentTab];
      }
    });
  }

  ngDoCheck(): void {
    console.log(this.currentTransactionType);
  }
}
