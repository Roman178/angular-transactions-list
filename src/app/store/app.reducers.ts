import { createReducer, on } from "@ngrx/store";
import { ITransaction } from "../http.service";
import * as actions from "./app.actions";

interface ITransactionState {
  transactions: ITransaction[];
  transactionTypes: string[];
}

const initialState: ITransactionState = {
  transactions: [],
  transactionTypes: [],
};

export const transactionsReducer = createReducer(
  initialState,
  on(actions.loadData, (state) => state),
  on(actions.dataLoadedSuccess, (state, { transactions }) => ({
    ...state,
    transactions,
  })),
  on(actions.setTransactionType, (state, { transactionTypes }) => ({
    ...state,
    transactionTypes,
  }))
);
