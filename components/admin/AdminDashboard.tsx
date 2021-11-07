import { UsersIcon } from "@heroicons/react/outline"
import Link from "next/link"

const AdminDashboard = () => {
  return (
    <div className="flex justify-center mt-20 lg:mt-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/admin/staff">
          <a>
            <div
              className="cursor-pointer border border-yellow-400 px-36 py-16 rounded-2xl shadow-2xl flex flex-col items-center 
        bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-xl lg:text-2xl text-white font-extrabold"
            >
              <UsersIcon className="h-7 md:h-8 w-7 md:w-8" />
              <div>Staff</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard
