import type { NextPage } from "next"
import AuthHeader from "components/AuthHeader"
import AuthFooter from "components/AuthFooter"
import LoginKeyPad from "components/LoginKeyPad"
import { RefreshIcon, XCircleIcon } from "@heroicons/react/outline"
import { LoginIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setError, setLoader } from "store/login/action-creators"
import { RootState } from "types"
import Input from "components/Input"

const keypadTexts = [
  { text: 1, id: "1" },
  { text: 2, id: "2" },
  { text: 3, id: "3" },
  { text: 4, id: "4" },
  { text: 5, id: "5" },
  { text: 6, id: "6" },
  { text: 7, id: "7" },
  { text: 8, id: "8" },
  { text: 9, id: "9" },
  {
    text: (
      <div className="flex justify-center">
        <XCircleIcon className="h-7 w-7 text-yellow-500" />
      </div>
    ),
    id: "cancel",
  },
  { text: 0, id: "0" },
  {
    text: (
      <div className="flex justify-center">
        <LoginIcon className="h-7 w-7 text-yellow-500" />
      </div>
    ),
    id: "login",
  },
]
const Login: NextPage = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(
    (state: RootState) => state.authReducer
  )

  console.log({ loading, error })

  const [PIN, setPIN] = useState("")
  // const [DISABL, setPIN] = useState("")
  const handleOnClick = async (id: string): Promise<void> => {
    if (id === "cancel") {
      setPIN(PIN.slice(0, -1))
    } else if (id === "login") {
      dispatch(setError(""))
      dispatch(setLoader(true))
      await new Promise((resolve) => setTimeout(resolve, 3000))
      dispatch(setError("Invalid PIN. Try again"))
      dispatch(setLoader(false))
      console.log("Will log you in")
    } else {
      setPIN(PIN + id)
    }
  }
  return (
    <div>
      <main className="">
        <div className="flex flex-col justify-between">
          <div className="w-full block">
            <AuthHeader title="Login" />
          </div>
          <div className="w-full md:w-8/12 flex self-center">
            <div className="mt-10 w-full">
              <h1 className="text-center text-2xl mb-5">Login</h1>
              <div className="border-2 border-yellow-100 p-5 md:p-10 flex justify-center rounded-lg shadow-2xl">
                <div className="w-full lg:w-5/12 md:w-10/12 xl:w-4/12">
                  <div className="my-5">
                    <Input
                      type="number"
                      placeholder="Enter your PIN"
                      value={PIN}
                      className="input w-full"
                      props={{ readOnly: true }}
                    />
                    {loading && (
                      <RefreshIcon className="animate-spin h-6 w-6" />
                    )}
                    {error !== "" && (
                      <div className="text-red-600 text-sm mt-1">
                        Invalid PIN. Try again
                      </div>
                    )}
                  </div>
                  <div className="mt-10">
                    <LoginKeyPad
                      keypadTexts={keypadTexts}
                      handleOnClick={handleOnClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <AuthFooter />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
