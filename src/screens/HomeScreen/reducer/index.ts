import { DatabaseStatus } from "../sections/DatabaseStatusIndicator"
import OneOf from "@/types/OneOf"
import { Currency } from "@/data/type"

export type DisplayListType = "crypto" | "fiat" | "purchasable" | "none";

export const Actions = {
  SET_CRYPTO_LIST: "SET_CRYPTO_LIST",
  SET_FIAT_LIST: "SET_FIAT_LIST",
  SET_DATABASE_STATUS: "SET_DATABASE_STATUS",
  SET_DISPLAY_LIST_TYPE: "SET_DISPLAY_LIST_TYPE",
} as const

export const INITIAL_STATE: State = {
  cryptoList: [],
  fiatList: [],
  databaseStatus: "empty",
  displayListType: "none",
}

type State = {
  cryptoList: Currency[]
  fiatList: Currency[]
  databaseStatus: DatabaseStatus
  displayListType: DisplayListType
}
type Action = {
  type: typeof Actions[keyof typeof Actions]
  payload: OneOf<State>
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case Actions.SET_CRYPTO_LIST:
      return {
        ...state,
        cryptoList: action.payload?.cryptoList ?? state.cryptoList,
      };
    case Actions.SET_FIAT_LIST:
      return {
        ...state,
        fiatList: action.payload?.fiatList ?? state.fiatList,
      };
    case Actions.SET_DISPLAY_LIST_TYPE:
      return {
        ...state,
        displayListType: action.payload?.displayListType ?? state.displayListType,
      };
    case Actions.SET_DATABASE_STATUS:
      return {
        ...state,
        databaseStatus: action.payload.databaseStatus ?? state.databaseStatus,
        cryptoList: action.payload?.databaseStatus == 'empty' ? [] : state.cryptoList,
        fiatList: action.payload?.databaseStatus == 'empty' ? [] : state.fiatList,
      };
    default:
      return state;
  }
}
