import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = ({ rating, reviews }) => {
  return (
    <div className="rating">
      <div className="stars">
        {rating >= 1 ? (
          <RiStarSFill className="RiStarSFill" />
        ) : rating >= 0.5 ? (
          <FaRegStarHalfStroke className="FaRegStarHalfStroke" />
        ) : (
          <RiStarSLine />
        )}
        {rating >= 2 ? (
          <RiStarSFill className="RiStarSFill" />
        ) : rating >= 1.5 ? (
          <FaRegStarHalfStroke className="FaRegStarHalfStroke" />
        ) : (
          <RiStarSLine />
        )}
        {rating >= 3 ? (
          <RiStarSFill className="RiStarSFill" />
        ) : rating >= 2.5 ? (
          <FaRegStarHalfStroke className="FaRegStarHalfStroke" />
        ) : (
          <RiStarSLine />
        )}
        {rating >= 4 ? (
          <RiStarSFill className="RiStarSFill" />
        ) : rating >= 3.5 ? (
          <FaRegStarHalfStroke className="FaRegStarHalfStroke" />
        ) : (
          <RiStarSLine />
        )}
        {rating >= 5 ? (
          <RiStarSFill className="RiStarSFill" />
        ) : rating >= 4.5 ? (
          <FaRegStarHalfStroke className="FaRegStarHalfStroke" />
        ) : (
          <RiStarSLine />
        )}
      </div>
      <div>
        <span>{rating}</span>
        <span>({reviews} reviews)</span>
      </div>
    </div>
  );
};

export default Rating;
