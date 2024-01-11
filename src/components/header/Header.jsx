import Logo from "./Logo";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div className="container">
        <Logo />
        <ul
          className="links"
          style={{
            clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <li onClick={() => setToggle(false)}>
            <NavLink to="/">
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <NavLink to="/about">
              <HiHomeModern />
              <span>About</span>
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <NavLink to="/login">
              <CiLogin />
              <span>Login</span>
            </NavLink>
          </li>

          <li onClick={() => setToggle(false)}>
            <NavLink to="/register">
              <span>Register</span>
              <IoPersonSharp />
            </NavLink>
          </li>
        </ul>

        <div onClick={() => setToggle(!toggle)} className="menu">
          {toggle ? <MdClose /> : <IoMdMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
