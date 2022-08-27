import React, { useEffect, useState } from 'react'
import postApi from '../../api/postApi';
import Pagination from '../Pagination';
import Modal from "./Post/Modal";
import useModal from './Post/useModal';

const Post = () => {

  const styleAdd = {
    textAlign: 'right',
    marginBottom: '10px'
  }

  const [posts, setPostList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [action, setAction] = useState('add');
  const {isShowing, toggle} = useModal();
  const [postId, setPostId] = useState(0);

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

  async function fetchPostList() {
    const res = await postApi.fetchList(limit, skip);
    const { data } = res;
    setPostList(data);
  }

  const handleSubmit = async (postId) => {
    try {
      await postApi.deleteItem(postId);
      fetchPostList();
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <Modal fetchPostList={fetchPostList} isShowing={isShowing} hide={toggle} action={action} postId={postId}></Modal>
      <div style={styleAdd}>
          <button onClick={
        () => {
          toggle();
          setAction('add');
        }
      }>Add</button>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Desciption</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
          {
            posts.map(post => {
              return (
                <tr key={ post._id }>
                  <th scope="row">{ post._id }</th>
                  <td>{ post.title }</td>
                  <td>{ post.description }</td>
                  <td><button onClick={
                    () => {
                      toggle();
                      setAction('edit');
                      setPostId(post._id)
                    }
                  }>Edit</button></td>
                  <td><button onClick={ () => { handleSubmit(post._id)} }>Delete</button></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <Pagination posts={posts} skip={skip} nextPage={nextPage} previousPage={previousPage}></Pagination>
    </>
  )
}

export default Post