import React, { useState } from 'react';
import postApi from '../../../api/postApi';

const Add = ({hide, fetchPostList}) => {
  const [title, setTitle] = useState(null);
  const [description, setDesciption] = useState(null);
  const [image, setImage] = useState(null);

  const handTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handDescriptionChange = (e) => {
    setDesciption(e.target.value);
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img);
  
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let imageBase64 = null;
      if (image) {
        imageBase64 = await convertBase64(image);
      }
      
      const response = await postApi.addItem({ title, description, file: imageBase64 });
      if (response) {
        fetchPostList();
        hide();
      } 
      
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
              placeholder="Enter title"
              onChange={handTitleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Pronounce</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter pronounce"
              onChange={handDescriptionChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Image</label>
            <input
              style={{height: 'auto'}}
              type="file"
              className="form-control mt-1"
              placeholder="Enter image"
              onChange={onImageChange}
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