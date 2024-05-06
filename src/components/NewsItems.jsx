import React from "react";
import image from '../assets/react.svg'

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 py-2 px-2" style={{maxWidth:"345px"}}>
      <img src={src?src:image} style={{width:"320px", height:"200px"}}  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${title==='[Removed]'?title='No longer available':title.slice(0,50)}`}</h5>
        <p className="card-text">{description?description.slice(0,90): "News description is not available"}</p>
        <a target="_blank" href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
