export const Actions = {
  SET_CURRENCY_LIST: "SET_CURRENCY_LIST",
} as const

export const INITIAL_STATE: State = {
  currencyList: [],
}

type State = {
  currencyList: string[]
}
type Action = {
  type: typeof Actions[keyof typeof Actions]
  payload: Record<string, any>
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case Actions.SET_CURRENCY_LIST:
      return {
        ...state,
        currencyList: action.payload.currencyList,
      };
    default:
      return state;
  }
}
