import React from "react"
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="row">
        <div className="col-12">
            <h2 className="tm-page-title mb-4">Our Video Catalog</h2>
            <div className="tm-categories-container mb-5">
                <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                <ul className="nav tm-category-list">
                    <li className="nav-item tm-category-item">
                      <Link className="nav-link tm-nav-link" to="/">All</Link>
                    </li>
                    <li className="nav-item tm-category-item">
                      <Link className="nav-link tm-nav-link" to="/?categoryId=1">Cate 01</Link>
                    </li>
                    <li className="nav-item tm-category-item">
                      <Link className="nav-link tm-nav-link" to="/?categoryId=2">Cate 02</Link>
                    </li>
                    <li className="nav-item tm-category-item">
                      <Link className="nav-link tm-nav-link" to="/?categoryId=3">Cate 03</Link>
                    </li>
                </ul>
            </div>        
        </div>
    </div>
  )
}

export default Category;