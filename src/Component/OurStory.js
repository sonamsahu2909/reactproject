import React from "react";
import "./css/Style.css";

function OurStory() {
  return (
    <>
      <div className="container  text-center mt-5 pt-5">
        <h2 ClassName=" mt-4 pt-4 text-center" style={{ color: "#820a0e" }}>
          ABOUT US
        </h2>
        <div>
          <h5 className="text-start text-white">
            Welcome to <b ClassName=" text-primary1 ">GYM_TSHIRT</b>
          </h5>
          <hr className="text-light" />
        </div>
        <p>
          We are a team of fitness enthusiasts and fashion-forward individuals
          who are passionate about creating comfortable and stylish workout
          clothing for people of all shapes and sizes.
          <br />
          <br />
          Our brand is all about athleisure - combining the functionality of
          athletic wear with the comfort and style of everyday fashion. We
          believe that looking and feeling good while working out is an
          important part of the fitness journey, and our goal is to help our
          customers feel confident and motivated to crush their workouts.
          <br />
          <br />
          In addition to our focus on comfort and functionality, we also offer
          unique and eye-catching designs that are inspired by anime and pop
          culture. Our customers love the bold, colorful, and creative graphics
          that set our gymwear apart from the rest.
          <br />
          <br />
          At FLWD, we believe in inclusivity and body positivity. We offer a
          wide range of sizes, styles, and fits to accommodate different body
          types and preferences. Whether you're a beginner or a seasoned
          athlete, we have something for everyone.
          <br />
          <br />
          Thank you for considering our brand for your gymwear needs. We hope
          you find something that speaks to your style and fitness goals. We
          can't wait to see you crush your workouts in our comfortable and
          stylish gymwear!
        </p>
        <div className="carousel slide" data-bs-ride="carousel" id="z">
          <div className="carousel-indicators d-none">
            <button
              type="button"
              data-bs-target="#z"
              data-bs-slide-to="0"
              className="active"
            ></button>

            <button
              type="button"
              data-bs-target="#z"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#z"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner p-3">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="image/img1.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
              <img src="image/img3.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
              <img src="image/img1.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
            </div>

            <div className="carousel-item " data-bs-interval="2000">
              <img src="image/img3.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
              <img src="image/img1.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
              <img src="image/img3.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img src="image/img1.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
              <img src="image/img3.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
              <img src="image/img1.jpg" width="30%" className="p-3" alt="..." />
              <div className="carousel-caption"></div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#z"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#z"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <hr className="text-light" />
    </>
  );
}

export default OurStory;
