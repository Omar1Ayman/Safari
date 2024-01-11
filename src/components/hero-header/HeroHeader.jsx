import { useEffect } from "react";
import "./hero-header.css";
import { FaSearch } from "react-icons/fa";

const HeroHeader = () => {
  let title = "Desert Safari";
  let j = 1;

  let isDeleting = false;

  useEffect(() => {
    const typing = () => {
      const bannerTitle = document.querySelector(".title");

      if (isDeleting) {
        bannerTitle.innerHTML = title.substring(0, j - 1);
        j--;

        if (j === 1) {
          isDeleting = false;
        }
      } else {
        bannerTitle.innerHTML = title.substring(0, j + 1);
        j++;

        if (j === title.length) {
          isDeleting = true;
        }
      }
    };

    const typingInterval = setInterval(typing, 300);

    // Cleanup function to stop the interval when the component unmounts
    return () => clearInterval(typingInterval);
  }, []);
  return (
    <div className="hero-header">
      <div className="search-box">
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="Search For Your Favourite Trip" />
        </div>
        <button className="btn">Search</button>
      </div>
      <div className="hero-header-title">
        {/* <h1>Egypt</h1> */}
        <h1 className="title"></h1>
      </div>
    </div>
  );
};

export default HeroHeader;
