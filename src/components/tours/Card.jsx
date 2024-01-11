import React from "react";
import { RiStarSFill } from "react-icons/ri";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Card = ({ tour }) => {
  return (
    <div className="col">
      <img src={tour.image} alt="" />
      <div className="body">
        <h2>{tour.title}</h2>
        <div>
          <p>{tour.duration}</p>
        </div>

        <div className="evaluate">
          <Rating rating={tour.rating} reviews={tour.reviews} />
        </div>
        <div className="from">
          <h2>
            From {tour.priceFrom}$ <small>per Perso</small>
          </h2>
        </div>
        <Link className="btn" to={`/tour/${tour.id}`}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
