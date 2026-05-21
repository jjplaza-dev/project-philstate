import React from 'react'
import Link from "next/link";

const Page = () => {
    return (
        <main>
          <h1>Hello Users</h1>
          <Link href="/users/new">Users Here</Link>
        </main>
    )
}
export default Page
