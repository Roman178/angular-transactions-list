import { Component, OnInit, DoCheck } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit, DoCheck {
  transactions = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getData()
      .subscribe((data: any) => (this.transactions = data));

    // console.log(this.transactions);
  }

  ngDoCheck(): void {
    console.log(this.transactions);
  }
}
