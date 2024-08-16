import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="img" className="about-img" />
        <img
          src={play_icon}
          alt="img"
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today </h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge currivulum is
          designed to empower students with the knowledge, skills, and
          experinces needed to excel in the dunamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether your aspire to become a teacher, adminstrator, counselor, or
          education leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential the
          future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
