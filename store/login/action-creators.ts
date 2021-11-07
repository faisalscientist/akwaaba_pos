import { LoginAction } from "types"
import { LOADING, SET_ERROR } from "./actions"

export const setLoader = (payload: boolean): LoginAction => {
  return { type: LOADING, payload }
}

export const setError = (payload: string): LoginAction => {
  return { type: SET_ERROR, payload }
}
