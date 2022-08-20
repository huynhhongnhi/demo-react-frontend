import React, { useState } from 'react';
import postApi from '../../../api/postApi';

const Add = ({hide}) => {
  const [title, setTitle] = useState(null);
  const [description, setDesciption] = useState(null);

  const handTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handDescriptionChange = (e) => {
    setDesciption(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postApi.addItem({ title, description });
    try {
      hide();
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <form className="post-form">
        <div className="post-form-content">
          <h3 className="post-form-title"> Form Add Post</h3>
          <div className="form-group mt-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handTitleChange}

            />
          </div>
          <div className="form-group mt-3">
            <label>Desciption</label>
            <textarea
              type="text"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handDescriptionChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3 text-center">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
  )
}

export default Add;