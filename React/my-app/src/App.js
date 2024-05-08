import React, { useState } from 'react';
// import Counter from './components/counter';
import PostList from './components/PostList';
import MyButton from './components/UI/button/inout/MyButton';

import './styles/app.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3 '},
  ])

  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Название поста'/>
        <input type='text' placeholder='Описание поста'/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
