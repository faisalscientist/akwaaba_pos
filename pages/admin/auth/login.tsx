import type { NextPage } from "next"
import AuthHeader from "components/AuthHeader"
import AuthFooter from "components/AuthFooter"
import AdminLogin from "components/admin/AdminLogin"
import { ChangeEvent, useState } from "react"

const Login: NextPage = () => {
  const [credentials, setCredentials] = useState<{
    email: string
    password: string
  }>({ email: "", password: "" })

  const handleSubmit = () => {
    console.log("handle")
  }

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement
    setCredentials((credentials) => {
      return { ...credentials, [name]: value }
    })
  }

  return (
    <div>
      <main className="">
        <div className="flex flex-col justify-between">
          <div className="w-full block">
            <AuthHeader title="Login" />
          </div>
          <div className="w-full xl:w-4/12 md:w-8/12 lg:w-6/12 flex self-center">
            <div className="mt-10 w-full">
              <h1 className="text-center text-2xl mb-5">Login</h1>
              <div className="border-2 border-yellow-100 p-5 md:p-10 rounded-2xl shadow-2xl">
                <AdminLogin
                  handleChange={handleChange}
                  credentials={credentials}
                  handleSubmit={handleSubmit}
                />
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
