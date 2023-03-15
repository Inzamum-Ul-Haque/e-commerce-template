import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import sliderImage from "../../../assets/images/image 116.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImage} alt="First slide" />
          <Carousel.Caption>
            <h3>
              Shop <span>Computer & Experience</span>
            </h3>
            <p>
              You cannot inspect quality into the product; it is already there.{" "}
              <br />I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
            <button>View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImage} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              Buy <span>Mobiles & Accessories</span>
            </h3>
            <p>
              You cannot inspect quality into the product; it is already there.{" "}
              <br />I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
            <button>View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImage} alt="Third slide" />

          <Carousel.Caption>
            <h3>
              Smooth <span>Shopping Experience</span>
            </h3>
            <p>
              You cannot inspect quality into the product; it is already there.{" "}
              <br />I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
            <button>View More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
