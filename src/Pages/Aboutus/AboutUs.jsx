import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about">
        <div className="text">
          <h2>About Us</h2>
          <h5>
            Buy Your Quality Product &amp;{" "}
            <span className="aboutspan">More</span>
          </h5>
          <p>
            Welcome to your Home, the ultimate destination for a wide range of
            high-quality products. Explore our diverse selection of electronics
            gadgets, solar power, and personal accessories. Rest assured that
            every product on our website meets the highest standards of
            excellence. Enjoy the convenience of cash on delivery, making your
            shopping experience effortless and worry-free. Start browsing now to
            discover superior quality items that will enhance your lifestyle.
          </p>
          <div className="data">
            <a href="/contactus" className="aboutbutton">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
