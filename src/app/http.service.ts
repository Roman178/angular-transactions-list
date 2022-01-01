import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { filter, map } from "rxjs/operators";

export interface ITransaction {
  _id: string;
  amount: string;
  type: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("../assets/db.json");
  }
}
