import "./banner.css";
import img from "../../images/safari.png";
import { useEffect } from "react";
const Banner = () => {
  let title = "EGYPT IS WAITING FOR YOU";
  let j = 1;

  let isDeleting = false;

  useEffect(() => {
    const typing = () => {
      const bannerTitle = document.querySelector(".banner-title");

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
    <div className="banner">
      <div className="container">
        <div className="banner-layout">
          <h1 className="banner-title"></h1>
        </div>
        <img className="banner-img" src={img} alt="safari" />
      </div>
    </div>
  );
};

export default Banner;
