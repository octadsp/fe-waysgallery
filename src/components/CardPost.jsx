import React from "react";

function CardPost(props) {
  return (
    <div className="card w-64 h-64 shadow-xl mb-3">
      <figure>
        <img
          src={props.image}
          alt="img1"
          className="object-cover h-64 w-80 rounded-xl"
        />
      </figure>
    </div>
  );
}

export default CardPost;
