import React from "react"

const PostItem = props => {

  const postData = props.post;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
          <div className="position-relative tm-thumbnail-container">
              <input type="image" img src={postData.thumbnail} alt={"photo"} className="img-fluid tm-catalog-item-img" />
          </div>    
          <div className="p-4 tm-bg-gray tm-catalog-item-description">
              <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{postData.title}</h3>
              <p className="tm-catalog-item-text">{postData.description}</p>
          </div>
      </div>
  )
}

export default PostItem