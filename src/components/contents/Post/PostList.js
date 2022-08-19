import React, { useState, useEffect } from "react";
import Item from "./PostItem";
import postApi from "../../../api/postApi";
import Pagination from "../../Pagination"

const PostList = () => {

    const [posts, setPostList] = useState([]);
    const [limit, setLimit] = useState(3);
    const [skip, setSkip] = useState(0);

    const nextPage = () => {
        setSkip(skip + limit);
    }

    const previousPage = () => {
        setSkip(skip - limit);
    }

    useEffect(() => {
        async function fetchPostList() {
            const res = await postApi.fetchList(limit, skip);
            const { data } = res;
            setPostList(data);
        }
        fetchPostList();
    }, [skip, limit]);

    return (
        <div className="row tm-catalog-item-list">
            {
                posts.map(post => {
                    return (
                        <Item key={post._id} post={post}></Item>
                    );
                })
            }
            <Pagination posts={posts} skip={skip} nextPage={nextPage} previousPage={previousPage}></Pagination>
        </div>
    )
}

export default PostList;