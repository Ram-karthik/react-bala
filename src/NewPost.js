import React from 'react'

const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
    return (
        <main>
            <h3>New Post</h3>
            <form onSubmit={handleSubmit}>
                <label for="title">Title:</label> <br /><br />
                <input
                    type="text"
                    id='postTitle'
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    required
                />
                <br /><br />
                <label for="post">Post:</label><br /><br />
                <textarea
                    id="postBody"
                    name="post"
                    rows="4" cols="50"
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit" className='btn'>
                    Submit
                </button>
            </form>
        </main>
    )
}

export default NewPost