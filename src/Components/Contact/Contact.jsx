import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "91064ea6-3d57-4581-8cd6-67b2b4838bdc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail" />
            contact@collegewala.com
          </li>
          <li>
            <img src={phone_icon} alt="phone" />
            +91 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="location" />
            77 Dwarka, Sector-9 <br />
            110077, India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label> Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />
          <label> Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            required
            placeholder="Type your message"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Send <img src={white_arrow} alt="icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
