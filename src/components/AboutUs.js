import React from "react";

function AboutUs() {
  return (
    <div style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "32px",
      background: "#fff",
      borderRadius: "12px",
      color: "#222"
    }}>
      <h1>About Us</h1>
      <p>
        Welcome to Contoso Traders! We are dedicated to providing the best products and customer service.
        Our mission is to deliver quality and value to our customers every day.
      </p>
      <h2>Our Team</h2>
      <ul>
        <li>Jane Doe – CEO</li>
        <li>John Smith – CTO</li>
        <li>Mary Johnson – Customer Success</li>
      </ul>
      <h2>Contact</h2>
      <p>Email: support@contosotraders.com</p>
    </div>
  );
}

export default AboutUs;