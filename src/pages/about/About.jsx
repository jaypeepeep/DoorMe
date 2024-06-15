import React from "react";
import "./About.css";
import aboutsection2img from "../../assets/about-section2.jpg";
import aboutsection2icon from "../../assets/about-section2-icon.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-section1-container">
        <div className="about-section1-content">
          <div className="vertical-line">
            <h1>About Us</h1>
          </div>
          <p>
            Welcome to DoorMe, your trusted companion in the quest for the
            perfect dorm. At DoorMe, we understand that finding the ideal living
            space is more than just a search—it's about discovering a place
            where you can thrive, study, and create unforgettable memories.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div className="about-section2-container">
        <div className="about-section2-content">
          <div className="about-section2-content">
            <img
              src={aboutsection2img}
              alt="Three young men in a dorm."
              className="about-section2-img"
            />
            <div className="about-section2-text">
              <div className="about-section2-title">
                <img src={aboutsection2icon} alt="Three young men in a dorm." />
                <h2>About Us</h2>
              </div>
              <h1>Our Mission</h1>
              <p>
                Our mission is simple: to make dorm hunting as seamless and
                stress-free as possible. We aim to connect students with dorms
                that match their lifestyle, preferences, and budget, ensuring a
                smooth transition into their academic journey.
              </p>
              <h1>Our Story</h1>
              <p>
                DoorMe was founded by a group of former students who experienced
                firsthand the challenges of finding suitable dorm
                accommodations. Frustrated by the limited options, unclear
                information, and the overwhelming process, we decided to create
                a platform that simplifies dorm hunting for students everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section3-container">
        <div className="about-section3-content"></div>
      </div>
      <div className="about-section4-container">
        <div className="about-section4-content"></div>
      </div>
    </div>
  );
}

export default About;
