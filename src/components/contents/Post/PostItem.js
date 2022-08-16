import React from "react"

const PostItem = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
          <div className="position-relative tm-thumbnail-container">
              <input type="image" img src={"img/tn-01.jpg"} alt={"photo"} className="img-fluid tm-catalog-item-img" />
          </div>    
          <div className="p-4 tm-bg-gray tm-catalog-item-description">
              <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Aenean aliquet sapien</h3>
              <p className="tm-catalog-item-text">Video thumbnail has a link to another HTML page. 
                  Categories <span className="tm-text-secondary">do not need</span> any JS. 
                  They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. 
                  This can be a large catalog.</p>
          </div>
      </div>
  )
}

export default PostItem