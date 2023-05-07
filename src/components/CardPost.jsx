import React from "react";

function CardPost(props) {
  return (
    <div className="card w-80 h-72 shadow-xl mb-3">
      <figure>
        <img
          src={props.image}
          alt="img1"
          className="object-cover h-72 w-80 rounded-xl"
        />
      </figure>
    </div>
  );
}

export default CardPost;
