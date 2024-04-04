import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
// import Post from './Post';
// import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPost] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "26 /02 / 2024",
      body: 'Begin  React...'
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "22 /02 / 2024",
      body: 'intermediate  React...'
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "21 /02 / 2024",
      body: 'Master  React...'
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "18 /02 / 2024",
      body: 'Expert  React'
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMM dd yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPost = [...posts, newPost];
    setPost(allPost);
    setPostTitle('');
    setPostBody('');
    // allPost.reverse();
    navigate('/');
  }

  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id); 
    setPost(postList);
    navigate('/')
  }
  return (
    <div>
      <Header title="Social App" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} />} />
        <Route path='about' element={<About />} />
        <Route path='/post' >
          <Route index
            element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />
            } />
          <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path='*' element={<Missing />} />
      </Routes>

      {/* <PostPage />
      <About />
      <Missing />
       */}
      <Footer />
    </div>
  );
}

export default App;