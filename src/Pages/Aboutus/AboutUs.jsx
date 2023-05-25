import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about">
        <div className="text">
          <h2>About Us</h2>
          <h5>
            buy your perfect product &amp;{" "}
            <span className="aboutspan">Trust</span>
          </h5>
          <p>
            Welcome to our e-commerce website, your one-stop destination for a
            wide range of quality products! We take immense pride in offering a
            diverse selection of items that cater to your needs and desires.
            Whether you're searching for fashion apparel, electronic gadgets,
            home decor, or personal accessories, we've got you covered. Our
            commitment to excellence ensures that every product on our website
            meets the highest standards of quality. We understand the importance
            of convenience, which is why we provide the option of cash on
            delivery, allowing you to shop with ease and confidence. Discover a
            seamless shopping experience where you can explore a variety of
            products, experience superior quality, and enjoy the convenience of
            cash on delivery. Start browsing now and find the perfect items to
            enhance your lifestyle.
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
