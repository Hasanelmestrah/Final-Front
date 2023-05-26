import "./contact.css";
import axios from "axios";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();
  const [error, setError] = useState(null);

  const [myData, setmyData] = useState({
    fullName: "",
    mail: "",
    Message: "",
  });
  const { fullName, mail, Message } = myData;

  const onChange = (e) => {
    setmyData({ ...myData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_c4g7cm2",
        "template_0lgipy4",
        form.current,
        "xGN8ZyR34jEIrY5"
      );

      form.current.reset();
    } catch (error) {
      console.log("E-mail sending failed", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!mail) {
      setError("E-mail is required");
      return;
    }
    setError(null);
    const newContact = {
      fullName: fullName,
      mail: mail,
      Message: Message,
    };
    await sendEmail(e);

    try {
      await axios.post("http://localhost:5000/contactus", newContact);
      setmyData({
        fullName: "",
        mail: "",
        Message: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };
  return (
    <div className="contact_container">
      <div className="contact_info">
        <span>
          <h1>Are You Interested To Know More About Us And Our Products?</h1>
        </span>
        <p>
          Thank you for placing your trust in ShopDeal. We value your feedback
          and suggestions, as they help us enhance our offerings and deliver an
          even better shopping experience. We are here to assist you at every
          step of your journey, so please don't hesitate to reach out to our
          customer support team if you have any questions or concerns..
        </p>
        <h3>Find Us At Beirut office .</h3>
        <i className="status"> We're Available Around The Clock! </i>
        <p>
          <span className="Beirut_lebanon">Beirut,Lebanon </span>
        </p>

        <div className="social_icons_contact">
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://wa.me/">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="form_contact_container">
        <form className="form_contact" onSubmit={onSubmit}>
          <h1>Get us to contact you</h1>
          <p>
            Please complete the details below and then click on Submit and we'll
            be in contact
          </p>
          <div>
            <label className="contact_form_name">
              Name
              <input
                name="fullName"
                type="text"
                placeholder="Your Name"
                value={fullName}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <div>
            <label className="contact_form_name">
              E-mail
              <input
                name="mail"
                type="text"
                placeholder="Your E-mail"
                value={mail}
                onChange={onChange}
                required
              />
              {error === "E-mail is required" && (
                <div style={{ color: "red" }}>{error}</div>
              )}
            </label>
          </div>

          <div>
            <label className="contact_form_name">
              Message
              <input
                name="Message"
                type="text"
                placeholder="Your Message"
                value={Message}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <div className="send_contact_div">
            <input
              className="send_contact_button"
              type="submit"
              value="Send Message"
              id="form_button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
