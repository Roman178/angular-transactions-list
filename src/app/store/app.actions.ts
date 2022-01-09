import { createAction, props } from "@ngrx/store";
import { ITransaction } from "../http.service";

export const loadData = createAction("[API Transactions] Load Data");

export const dataLoadedSuccess = createAction(
  "[API Transactions] Data Loaded Success",
  props<{ transactions: ITransaction[] }>()
);

export const setTransactionType = createAction(
  "[Transactions] Set Transaction Types",
  props<{ transactionTypes: any }>()
);
