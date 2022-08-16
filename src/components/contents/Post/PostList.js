import React from "react";
import Item from "./PostItem";

const PostList = () => {
    let Items = [];

    for (var i = 0; i < 10; i++) {
        Items.push(<Item key={i}></Item>);
    }
    return (
        <div className="row tm-catalog-item-list">
            {Items}
        </div>
    )
}

export default PostList;