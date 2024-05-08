import React, { useState } from "react";
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''}) 
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput 
                value={post.title} //1) способ получения данных из управляемого инпута
                onChange={e => setPost({...post, title: e.target.value})}
                type="title"
                placeholder='Название поста'
            />
            <MyInput 
                value={post.body} //1) способ получения данных из управляемого инпута
                onChange={e => setPost({...post, body: e.target.value})}
                type="title"
                placeholder='Описание поста'
            />
            {/* Неуправляемый компонент
            <MyInput 
            ref={bodyInputRef} //2) ref - props хука useRef
            placeholder='Описание поста'
            /> */}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;