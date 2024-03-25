import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='nav-bar'>
            <form>
                <label className='navbar-lbl'>Search For Post</label>
                <input
                    id='search'
                    type='text'
                    placeholder='search for post'
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='post'>Post</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

// { search, setSearch }