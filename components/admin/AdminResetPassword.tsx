import Checkbox from "../Checkbox"
import Input from "../Input"
import Link from "next/link"
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { AdminResetPasswordProps } from "types"

const AdminResetPassword = ({
  password: { newPassword, newPasswordConfirmation },
  handleSubmit,
  handleChange,
}: AdminResetPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [passwordInputType, setPasswordInputType] = useState<string>("password")
  return (
    <div>
      <h1 className="text-sm md:text-lg text-center">Reset your password</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-10">
          <label htmlFor="email" className="block mb-2">
            New Password
          </label>
          <div className="flex password-input">
            <div className="w-11/12">
              <Input
                type={passwordInputType}
                placeholder="Password"
                value={newPassword}
                className="block w-full outline-none px-5 py-3"
                handleChange={handleChange}
                props={{ name: "newPassword" }}
              />
            </div>
            <div className="w-1/12 flex justify-center">
              {!showPassword ? (
                <EyeOffIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setPasswordInputType("text")
                  }}
                />
              ) : (
                <EyeIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setPasswordInputType("password")
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="my-10">
          <label htmlFor="email" className="block mb-2">
            Confirm Password
          </label>
          <div className="flex password-input">
            <div className="w-11/12">
              <Input
                type={passwordInputType}
                placeholder="Confirm Password"
                value={newPasswordConfirmation}
                className="block w-full outline-none px-5 py-3"
                handleChange={handleChange}
                props={{ name: "newPasswordConfirmation" }}
              />
            </div>
            <div className="w-1/12 flex justify-center">
              {!showPassword ? (
                <EyeOffIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setPasswordInputType("text")
                  }}
                />
              ) : (
                <EyeIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword)
                    setPasswordInputType("password")
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="my-10">
          <button
            type="submit"
            className="w-full border border-yellow-600 bg-yellow-500 text-white 
          text-base md:text-xl py-2 md:py-3 rounded-full transition duration-500 ease-in-out hover:bg-yellow-700"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminResetPassword
