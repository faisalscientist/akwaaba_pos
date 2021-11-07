import type { NextPage } from "next"
import AuthHeader from "components/AuthHeader"
import AuthFooter from "components/AuthFooter"
import AdminLogin from "components/admin/AdminLogin"
import { ChangeEvent, useState } from "react"
import AuthorizedAdminHeader from "components/admin/AuthorizedAdminHeader"
import AdminDashboard from "components/admin/AdminDashboard"

const Dashboard: NextPage = () => {
  return (
    <div>
      <main className="">
        <div className="flex flex-col justify-between">
          <div className="w-full block">
            <AuthorizedAdminHeader title="Login" />
          </div>
          <div className="mt-10 mx-10">
            <h1 className="text-center text-2xl mb-5">Dashboard</h1>
            <AdminDashboard />
          </div>
          <div className="w-full">{/* <AuthFooter /> */}</div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
