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
            Welcome To Our Website, The Ultimate Destination For A Wide Range Of
            High-Quality Products. Explore Our Diverse Selection Of Electronics
            Gadgets, Solar Power, And Personal Accessories. Rest Assured That
            Every Product On Our Website Meets The Highest Standards Of
            Excellence. Enjoy The Convenience Of Cash On Delivery, Making Your
            Shopping Experience Effortless And Worry-Free. Start Browsing Now To
            Discover Superior Quality Items That Will Enhance Your Lifestyle.
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
