import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/app.css'
import MyButton from './components/UI/button/MyButton';



function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'aaa', body: 'zzz'},
    {id: 2, title: 'bbb 2', body: 'bbb 2'},
    {id: 3, title: 'zzz 3', body: 'aaa 3 '},
  ])

  // const [title, setTitle] = useState('');//1)двухстороннее связывание для 1 способа
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('Сортировка...');
    if(filter.sort) {
      //здесь мы сортируем копию массива из-за [], а не исходник
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]) //сортировка в рендере происходит при каждом изменении в поиске
  //что являет собой большую нагрузку на производительность, здесь лучше использовать хук useMemo()
  //Он принимает результат математических действий и кеширует, чтобы не пересчитывать.
  //Но если зависимости поменяются, например, вид сортировки, то он снова пересчитывает и кеширует заново

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  //получаем пост из дочернего компонента для удаления
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
    </div>
  );
}

export default App;
