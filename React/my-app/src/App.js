import React, { useState } from 'react';
// import Counter from './components/counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

import './styles/app.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3 '},
  ])

  // const [title, setTitle] = useState('');//1)двухстороннее связывание для 1 способа
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  //получаем пост из дочернего компонента для удаления
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort()) //здесь мы сортируем копию массива из-за [], а не исходник
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'title', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0 //условная отрисовка
        ? <PostList remove={removePost} posts={posts} title="Посты про JS"/>
        : <h1 
            style={{textAlign: 'center'}}>
              Посты не найдены
          </h1>}
    </div>
  );
}

export default App;
