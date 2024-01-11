import "./news-letter.css";
import img from "../../images/safari.png";
const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="container">
        <img src={img} alt="safari" />
        <div className="content">
          <div className="top">
            <h2 className="title">Your Egypt itinerary is wating</h2>
            <p>
              Recive a curated 48-houres itinerary featuring the most iconic
              experiences in Egypt, straght in your inbox
            </p>
          </div>
          <form>
            <input type="text" placeholder="Yuor Email" name="" id="" />
            <button className="btn">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
