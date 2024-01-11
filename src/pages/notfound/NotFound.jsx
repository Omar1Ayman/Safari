import "./not-found.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link className="back" to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
