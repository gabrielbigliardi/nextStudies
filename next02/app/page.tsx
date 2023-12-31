import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import LogoutButton from "./components/LogoutButton"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="p-10">
      <h1>Hello from the index page, this is public, not authanticated</h1>
      {session ? (
        <div>
          <h1>You are logged in</h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>Please log in</h1>
          <Link href={'/auth'}>Login</Link>
        </div>
      )}
    </div>
  )
}
