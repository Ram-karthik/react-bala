import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  console.log(post);
  return (
    <main>
      <article className='p-20'>
        {post &&
          <>
            <h1>{post.title}</h1>
            <p className='post-date'>{post.datetime}</p>
            <p>{(post.body)}</p>
            <button
              onClick={() =>
                handleDelete(post.id)
              }
              className='btn'
              style={{ marginTop: '20px', cursor: 'pointer' }}
            >Delete post</button>
          </>
        }
        {
          !post &&
          <>
            <h1>Post Not Found</h1>
            <p className='post-date'>Visit Our Home Page for new Post...</p>
          </>
        }
      </article >
    </main>
  )
}

export default PostPage