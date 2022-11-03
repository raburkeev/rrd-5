import React from 'react'
import {Link} from 'react-router-dom'

const UsersListPage = () => {
    const users = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5}
    ]
    return (
        <div>
            <h1>
                Users List
            </h1>
            <hr/>
            <button>
                <h3>
                    <Link to={'/'}>Home Page</Link>
                </h3>
            </button>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                {`User - ${user.id}`}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UsersListPage