import React, { useState } from 'react';

const Add = props => {

  return (
      <form className="post-form">
        <div className="post-form-content">
          <h3 className="post-form-title"> Form Edit Post</h3>
          <div className="form-group mt-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter email"

            />
          </div>
          <div className="form-group mt-3">
            <label>Desciption</label>
            <textarea
              type="text"
              className="form-control mt-1"
              placeholder="Enter password"

            />
          </div>
          <div className="d-grid gap-2 mt-3 text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
  )
}

export default Add;