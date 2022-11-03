import React from 'react'
import {useParams, Link} from 'react-router-dom'

const EditUserPage = () => {
    const {userId} = useParams()

    return (
        <div>
            <h1>User Edit Page</h1>
            <hr/>
            <div>
                <button>
                    <h3>
                        <Link to={`/users/${userId}`}>View current user profile</Link>
                    </h3>
                </button>
                {'     '}
                <button>
                    <h3>
                        <Link to={`/users`}>Users List</Link>
                    </h3>
                </button>
            </div>
            <br/>
            <div>
                <button>
                    <h3>
                        <Link to={`/users/${+userId - 1}`}>{'<=== View previous user profile'}</Link>
                    </h3>
                </button>
                {'     '}
                <button>
                    <h3>
                        <Link to={`/users/${+userId + 1}`}>{'View next user profile ===>'}</Link>
                    </h3>
                </button>
            </div>
        </div>
    )
}

export default EditUserPage