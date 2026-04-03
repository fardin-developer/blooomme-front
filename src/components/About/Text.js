import React from "react";
import "./Text.css";

const Text = () => {
  return (
    <>
      <div className="container text-container border shadow p-3 pt-4 bg-white">
        <h3 className="mb-4" style={{ padding: "0 12px" }}>
          About Us
        </h3>
        <p className="text-muted container">
          Welcome to Blooomme, your ultimate destination for aesthetic lifestyle
          and women's wellness. We believe that everyday life should be infused
          with comfort, style, and moments of self-care.
          <hr className="m-0 my-2" />
        </p>
        <p className="text-muted container">
          At Blooomme, our passion is curating a thoughtful collection of items
          designed to elevate your daily routine. We are dedicated to providing
          you with essentials that not only look beautiful but also support your
          well-being.
          <hr className="m-0 my-2" />
          With a steadfast commitment to quality and aesthetics, we strive to
          create a space where you can find exactly what you need to feel
          empowered and comfortable. Our user-friendly platform is designed to
          simplify your journey towards a balanced lifestyle.
          <hr className="m-0 my-2" />
          Join us today and take the first step towards a more beautiful,
          fulfilling everyday experience. Your journey to wellness and aesthetic
          living begins here.
        </p>
      </div>

      <div className="container text-container border shadow p-3 pt-4 mt-4 bg-white">
        <h3 className="mb-4" style={{ padding: "0 12px" }}>
          Our Mission
        </h3>
        <p className="text-muted container">
          At Blooomme, our mission is to empower individuals by providing
          high-quality, aesthetic, and functional lifestyle additions that
          promote wellness and comfort. We are committed to fostering a
          supportive community focused on self-care, confidence, and stylish
          living.
        </p>
        <hr className="m-0 my-2" />
        <p className="text-muted container">
          Join us in our mission to bring a touch of elegance and comfort to
          your daily life. Your journey towards a fulfilling lifestyle starts
          here.
        </p>
      </div>

      <div className="container text-container border shadow p-3 pt-4 mt-4 bg-white">
        <h3 className="mb-4" style={{ padding: "0 12px" }}>
          Why Choose Us?
        </h3>
        <div className="container">
          <p>
            <strong>Curated Selection: </strong>
            <span className="text-muted">
              We handpick every item for its quality, aesthetic appeal, and
              ability to enhance your daily life and comfort.
            </span>
          </p>
          <p>
            <strong>Commitment to Wellness: </strong>
            <span className="text-muted">
              Your well-being is our priority, and our collections reflect a
              deep dedication to self-care and holistic health.
            </span>
          </p>
          <p>
            <strong>Premium Quality: </strong>
            <span className="text-muted">
              We partner with trusted creators to bring you reliable
              products you can love and depend on every day.
            </span>
          </p>
          <p>
            <strong>Aesthetic Focus: </strong>
            <span className="text-muted">
              We believe beautiful design elevates the everyday experience,
              bringing joy and serenity to small moments.
            </span>
          </p>
          <p>
            <strong>Secure Shopping: </strong>
            <span className="text-muted">
              Your safety and confidentiality are important to us. We employ
              secure measures to protect your personal information.
            </span>
          </p>
          <p>
            <strong>User-Friendly Interface: </strong>
            <span className="text-muted">
              Our platform is designed with simplicity in mind, ensuring your
              shopping experience is seamless and enjoyable.
            </span>
          </p>
          <p>
            <strong>Exceptional Customer Support: </strong>
            <span className="text-muted">
              Our dedicated customer support team is available to assist you
              with any questions, providing prompt and reliable help.
            </span>
          </p>
        </div>
      </div>

      <div className="container text-container border shadow p-3 pt-4 mt-4 bg-white">
        <h3 className="mb-4" style={{ padding: "0 12px" }}>
          Contact Us
        </h3>
        <p className="text-muted container">
          If you have any questions or need assistance, please don't hesitate to
          contact our friendly support team at{" "}
          <strong>hello@blooomme.com</strong>. We are here to help you shine.
        </p>
      </div>
    </>
  );
};

export default Text;
