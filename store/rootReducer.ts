import { CombinedState, combineReducers } from "redux"
import { RootStateOrAny } from "react-redux"
import authReducer from "store/login/reducer"
import { LoginState } from "types"

const rootReducer = combineReducers({
  authReducer,
})

// reset the state of a redux store
const appReducer = (
  state: RootStateOrAny,
  action: { type: string }
): CombinedState<{
  authReducer: LoginState
}> => {
  return rootReducer(state, action)
}

export default appReducer
