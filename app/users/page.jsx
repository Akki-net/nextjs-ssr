import React from 'react'
import Link from 'next/link'

async function fetchApi(uri) {
  const res = await fetch(uri)
  const data = await res.json()
  return data
}

async function page() {
  const data = await fetchApi('https://dummyjson.com/users')
  return (
    <div>
      <ul>
        {data.users.map(user => <li key={user.id}>
            <Link href={`users/${user.id}`}>{user.firstName} {user.lastName}</Link>
        </li>)}
      </ul>
    </div>
  )
}

export default page