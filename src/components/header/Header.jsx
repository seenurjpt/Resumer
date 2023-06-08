import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import CustomizedSwitches from "./Toggle";

const Header = () => {
  return (
    <div className="nav">
      <nav>
        <div className="grid grid-cols-6 gap-4  p-4">
          <CustomizedSwitches />
          <Link to="/home" className="col-start-2 col-span-4 text-center">
            <p className="text-2xl  logo ">Resumer</p>
          </Link>
          <div className=" ml-0 sm:ml-40 text-center">
            <Link to="help">
              <p id="help">Get Help</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
