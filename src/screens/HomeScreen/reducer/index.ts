import { DatabaseStatus } from "../sections/DatabaseStatusIndicator"
import OneOf from "@/types/OneOf"

export const Actions = {
  SET_CRYPTO_LIST: "SET_CRYPTO_LIST",
  SET_DATABASE_STATUS: "SET_DATABASE_STATUS",
} as const

export const INITIAL_STATE: State = {
  currencyList: [],
  databaseStatus: "empty"
}

type State = {
  currencyList: string[]
  databaseStatus: DatabaseStatus
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
        currencyList: action.payload?.currencyList ?? state.currencyList,
      };
    case Actions.SET_DATABASE_STATUS:
      return {
        ...state,
        databaseStatus: action.payload.databaseStatus ?? state.databaseStatus,
      };
    default:
      return state;
  }
}
