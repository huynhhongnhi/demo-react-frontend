import React, { useEffect, useState } from 'react';
import postApi from '../../../api/postApi';

const Add = ({ fetchPostList, postId, hide }) => {

  const [title, setTitle] = useState(null);
  const [description, setDesciption] = useState(null);

  const handTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handDescriptionChange = (e) => {
    setDesciption(e.target.value);
  }

  useEffect(() => {
      async function fetchDetail() {
          const res = await postApi.fetchDetail(postId);
          const { data } = res;
          setTitle(data.title)
          setDesciption(data.description)
      }
      fetchDetail();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await postApi.editItem(postId, { title, description });
      fetchPostList();
      hide();
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <form className="post-form">
        <div className="post-form-content">
          <h3 className="post-form-title"> Form Edit Post</h3>
          <div className="form-group mt-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter title"
              value={title}
              onChange={handTitleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control mt-1"
              placeholder="Enter description"
              value={description}
              onChange={handDescriptionChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3 text-center">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
  )
}

export default Add;