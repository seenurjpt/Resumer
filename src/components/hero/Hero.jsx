import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroImage from "../../assets/Hero-Image.svg";
import Button from "@mui/material-next/Button";
import { ChevronRight } from "react-feather";

const Hero = () => {
  return (
    <div className="hero px-11 sm:p-10 bgcolor">
      <div className="mt-3">
        <p>
          Your <span>Resume</span>
        </p>
        <p>Is Your Story,</p>
        <p>Let Us Help You To Tell It.</p>
        <p>
          <span>It's Free!</span>
        </p>
        <Link to="/resume">
          <Button id="getstart-button" disabled={false} size="large">
            Get Started <ChevronRight />
          </Button>
        </Link>
      </div>

      <div>
        <img src={HeroImage} alt="" className="h-100" />
      </div>
    </div>
  );
};

export default Hero;
