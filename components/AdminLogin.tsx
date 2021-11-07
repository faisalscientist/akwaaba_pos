import Checkbox from "./Checkbox"
import Input from "./Input"
import Link from "next/link"
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { AdminLoginProps } from "types"

const AdminLogin = ({
  credentials: { password, email },
  handleSubmit,
  handleChange,
}: AdminLoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [passwordInputType, setPasswordInputType] = useState<string>("password")
  return (
    <div>
      <h1 className="text-sm md:text-lg text-center">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="my-10">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            className="block input w-full"
            handleChange={handleChange}
            props={{ name: "email" }}
          />
        </div>
        <div className="my-10">
          <label htmlFor="email" className="block mb-2">
            Password
          </label>
          <div className="flex password-input">
            <div className="w-11/12">
              <Input
                type={passwordInputType}
                placeholder="Password"
                value={password}
                className="block w-full outline-none px-5 py-3"
                handleChange={handleChange}
                props={{ name: "password" }}
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
        <div className="my-10 flex items-center justify-between">
          <Checkbox
            label="Remember me?"
            value="yes"
            className="opacity-0 absolute h-8 w-8 cursor-pointer"
          />
          <Link href="/admin/auth/forgot-password">
            <a className="text-xs md:text-base text-blue-700">
              Forgot Password?
            </a>
          </Link>
        </div>
        <div className="my-10">
          <button
            type="submit"
            className="w-full border border-yellow-600 bg-yellow-500 text-white 
          text-base md:text-xl py-2 md:py-3 rounded-full transition duration-500 ease-in-out hover:bg-yellow-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin
