import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { throwError } from "rxjs";
import { mergeMap, switchMap, catchError } from "rxjs/operators";
import * as _actions from "./app.actions";
import { HttpService, ITransaction } from "../http.service";

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(_actions.loadData),
      mergeMap(() =>
        this.http.getData().pipe(
          switchMap((transactions: any) => [
            _actions.dataLoadedSuccess({ transactions }),
            _actions.setTransactionType({
              transactionTypes: [
                ...new Set(transactions.map((t: ITransaction) => t.type)),
              ],
            }),
          ]),
          catchError((err) => {
            console.error(err.message);
            return throwError(err.message);
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpService) {}
}
