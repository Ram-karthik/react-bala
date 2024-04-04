import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <article>
            <Link to={`post/${post.id}`} >
                <h1>{post.title}</h1>
                <p className='post-date'>{post.datetime}</p>
            </Link>
            <p>{(post.body).length <= 25 ? (post.body) : `${(post.body).slice(0, 25)}...`}</p>
        </article >
    )
}

export default Post