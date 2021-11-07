import { LoginAction, LoginState } from "types"
import { LOADING, SET_ERROR } from "./actions"

const initialState: LoginState = {
  loading: false,
  error: "",
}

const authReducer = (
  state: LoginState = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case LOADING:
      console.log(state)
      return { ...state, loading: action.payload as boolean }
    case SET_ERROR:
      return { ...state, error: action.payload as string }
    default:
      return state
  }
}

export default authReducer
