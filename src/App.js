import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Post from './Post';
import PostLayout from './PostLayout';
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

  useEffect(() => {
    const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults);
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
  }
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='/postpage' element={<PostLayout />}>
          <Route index element={<PostPage />} />
          <Route path=':a' element={<Post />} />
          <Route path='newpost' element={<NewPost />} />
        </Route>
        <Route path='*' element={<Missing />} />
      </Routes> */}
      <Header title="Social App" />
      <Nav search={search} setSearch={setSearch} />
      <Home posts={searchResults} />
      <NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;

//8.00.52