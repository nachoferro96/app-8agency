import React from "react";
import "./Contact.css";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import Header2 from "./Header2";

function Contact() {
  return (
    <div className="contact">
      <Header2 />
      <div className="coso">
        <Contact1 />
        <Contact2 />
      </div>

      <div id="contact"></div>
    </div>
  );
}

export default Contact;
