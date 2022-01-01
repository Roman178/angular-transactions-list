import { Component, OnInit, DoCheck, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpService, ITransaction } from "../http.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  providers: [HttpService],
})
export class ListComponent implements OnInit, DoCheck {
  public tab: string = "";
  public transactionTypes: string[] = [];
  transactions: any = [];

  private querySubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {
    this.querySubscription = route.queryParams.subscribe((param: any) => {
      this.tab = param["tab"];
    });
    this.transactions = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    console.log(this.transactions);
  }

  ngDoCheck(): void {
    // console.log(this.transactions);
  }
}
