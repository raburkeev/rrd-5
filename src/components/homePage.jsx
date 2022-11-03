import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <hr/>
            <button>
                <h3>
                    <Link to={'/users'}>Users List</Link>
                </h3>
        </button>
        </div>
    )
}

export default HomePage