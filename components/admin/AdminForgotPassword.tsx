import Input from "../Input"
import Link from "next/link"
import { AdminForgotPasswordProps } from "types"

const AdminForgotPassword = ({
  email,
  handleSubmit,
  handleChange,
}: AdminForgotPasswordProps) => {
  return (
    <div>
      <h1 className="text-sm md:text-lg text-center">
        Please enter your email address to request a password reset
      </h1>
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
        <button
          className="w-full border border-yellow-600 bg-yellow-500 text-white 
          text-base md:text-xl py-2 md:py-3 rounded-full transition duration-500 ease-in-out hover:bg-yellow-700"
        >
          Send Request
        </button>
      </div>
      <div className="my-5 text-center">
        <Link href="/admin/auth/login">
          <a className="text-blue-700">Back to Login</a>
        </Link>
      </div>
    </div>
  )
}

export default AdminForgotPassword
