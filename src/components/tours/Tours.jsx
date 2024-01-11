import "./tours.css";
import { GoCodescanCheckmark } from "react-icons/go";
import Card from "./Card";
import { useEffect, useState } from "react";
import { sortTours } from "../../utils/sorting";

const Tours = ({ tours, lengthOfTours }) => {
  const [sortBy, setSort] = useState("recomended");
  const [sortedTours, setSortedTours] = useState([]);

  // Function to sort tours based on different criteria
  useEffect(() => {
    // Update sortedTours state
    setSortedTours(sortTours(tours, sortBy));
  }, [sortBy, tours]);

  return (
    <div className="tours">
      <div className="container">
        <div className="recomeded">
          <span className="cont">
            {lengthOfTours} tours found <GoCodescanCheckmark />
          </span>
          <div className="select">
            <select onChange={(e) => setSort(e.target.value)} value={sortBy}>
              <option value="recomended">Recomended</option>
              <option value="lth">Price - Low to High</option>
              <option value="htl">Price - High to Low</option>
            </select>
          </div>
        </div>

        <div className="row">
          {sortedTours.map((tour) => (
            <Card key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
