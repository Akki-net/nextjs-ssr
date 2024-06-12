import React from 'react'

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
        {data.users.map(user => <li id={user.id}>
            {user.firstName} {user.lastName}
        </li>)}
      </ul>
    </div>
  )
}

export default page