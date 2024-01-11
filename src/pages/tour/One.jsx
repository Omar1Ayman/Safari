import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTourByd } from "../../utils/Apis";
import "./one.css";
import { CiBookmarkCheck } from "react-icons/ci";

import Rating from "../../components/tours/Rating";

const One = () => {
  const { id } = useParams();
  const [tour, setTour] = useState([]);

  useEffect(() => {
    setTour(getTourByd(+id));
  }, [id]);

  console.log(tour);
  return (
    <div className="one-tour">
      <div className="container">
        {!tour && <h1 className="warning">Not found any tour for this id</h1>}
        {tour && (
          <>
            <div className="card">
              <img src={tour.image} alt="" />
              <div className="booking">
                <h3>save up to 35%</h3>
                <p>Booked 42 times yesterday</p>
                <span>
                  {tour.priceFrom}
                  per person
                </span>
                <button>Book Now</button>
                <div className="save">
                  <CiBookmarkCheck />
                  <Link to="">reserve now and pay later</Link>
                </div>
              </div>
            </div>
            <div className="body">
              <h2>{tour.title}</h2>
              <Rating rating={tour.rating} reviews={tour.reviews} />
              <div className="cont">
                <p>{tour.duration}</p>
                <h4>
                  From {tour.priceFrom}$ <small>per Perso</small>
                </h4>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default One;
