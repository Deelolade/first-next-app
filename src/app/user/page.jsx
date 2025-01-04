import React from 'react'

const Userspage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return (
        <>
            <h1>Users</h1>
            <div>
                {data.map((user, idx) => {
                    return (
                        <ul>
                            <li key={idx}>{user.name}</li>
                            <li>{user.email}</li>
                        </ul>
                    )
                })}</div>
        </>

    )
}

export default Userspage
