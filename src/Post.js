import React from 'react'
import { useParams } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <article>
            <h1>{post.title}</h1>
            <p className='post-date'>{post.datetime}</p>
            <p>{(post.body).length <= 25 ? (post.body) : `${(post.body).slice(0, 25)}...`}</p>
        </article>
    )
}

export default Post