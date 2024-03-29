import React from "react";
import { ArrowBack } from "@material-ui/icons";
import "./styles/Contact.scss";
import { Link, Route } from "react-router-dom";

const Contact = () => {
  return (
    <Route>
      <div className="contact">
        <Link to="/ ">
          <ArrowBack className="arrow" />
        </Link>
        <div className="inputs">
          <h1>Contact Me</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" className="message" />
          <button>Send</button>
        </div>
      </div>
    </Route>
  );
};
export default Contact;
