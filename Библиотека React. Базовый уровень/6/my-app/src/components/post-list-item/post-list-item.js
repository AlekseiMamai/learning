import React from "react";

import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i className="fa-solid fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fa-solid fa-trash"></i>
                </button>
                <i className="fa-solid fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;