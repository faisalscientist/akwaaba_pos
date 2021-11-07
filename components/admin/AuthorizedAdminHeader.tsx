import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { AuthorizedAdminHeaderProps } from "types"
import { AuthHeaderProps } from "types/auth"

const AuthorizedAdminHeader: NextPage<AuthorizedAdminHeaderProps> = ({
  title,
}: AuthHeaderProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex justify-between items-center bg-yellow-500 h-14 px-5 font-Montserrat shadow-lg">
        <Link href="/admin/auth/login">
          <a>Logo</a>
        </Link>
        <div>Support</div>
      </header>
    </div>
  )
}

export default AuthorizedAdminHeader
