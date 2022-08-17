import React, { useState   } from "react";
import Item from "./PostItem";
import { v1 as uuidv1 } from 'uuid';

const PostList = () => {
    const [postState, setPostState] = useState([
        {
            id: uuidv1(),
            title: 'Aenean aliquet sapien.',
            description: 'Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.',
            thumbnail: 'img/tn-01.jpg',
            categoryId: 1
        },
        {
            id: uuidv1(),
            title: 'Aenean aliquet sapien.',
            description: 'Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.',
            thumbnail: 'img/tn-01.jpg',
            categoryId: 2
        },
        {
            id: uuidv1(),
            title: 'Aenean aliquet sapien.',
            description: 'Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.',
            thumbnail: 'img/tn-01.jpg'
        },
        {
            id: uuidv1(),
            title: 'Aenean aliquet sapien.',
            description: 'Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.',
            thumbnail: 'img/tn-01.jpg',
            categoryId: 3
        },
        {
            id: uuidv1(),
            title: 'Aenean aliquet sapien.',
            description: 'Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.',
            thumbnail: 'img/tn-01.jpg',
            categoryId: 1
        },
        {
            id: uuidv1(),
            title: 'Aenean aliquet sapien.',
            description: 'Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.',
            thumbnail: 'img/tn-01.jpg',
            categoryId: 2
        }
    ]);

    return (
        <div className="row tm-catalog-item-list">
            {
                postState.map(post => {
                    return (
                        <Item post={post}></Item>
                    );
                })
            }
        </div>
    )
}

export default PostList;