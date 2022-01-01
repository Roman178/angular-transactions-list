import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  title = "app";
  public data = [];

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.httpService.getData().subscribe((data: any) => (this.data = data));
  }

  goToList() {
    this.router.navigateByUrl("/navigator", { state: this.data });
  }
}
