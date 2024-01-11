import "./Services.css";
import { FaRegImage } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { MdLocationCity } from "react-icons/md";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="col">
          <FaRegImage className="gray" />
          <span>Adventures</span>
        </div>
        <div className="col">
          <HiMiniUsers className="orange" />
          <span>Famil Tours</span>
        </div>
        <div className="col">
          <MdLocationCity className="black" />
          <span>Ciity Cards</span>
        </div>
        <div className="col">
          <TbWorld className="prim" />
          <span>Multy-day trips</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
