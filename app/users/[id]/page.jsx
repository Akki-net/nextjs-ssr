import React from 'react'

const fetchApi = async id => {
    const res = await fetch(`https://dummyjson.com/user/${id}`)
    return res.json()
}

async function page({ params }) {
    const id = params.id
    const user = await fetchApi(id)
    // console.log('data', user)
    return (
        <div>
            <h2>User's info</h2>
            <table>
                <tbody>
                    <tr>
                        <td><b>Name: </b></td>
                        <td>{user.firstName} {user.lastName}</td>
                    </tr>
                    <tr>
                        <td><b>Gender: </b></td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td><b>Age: </b></td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td><b>Email: </b></td>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default page