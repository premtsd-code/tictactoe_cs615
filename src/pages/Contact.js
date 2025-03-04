import React from "react";

const Contact = () => (
  <div className="container features">
    <h2>Contact Us</h2>
    <form>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="Your Email" />
      </div>
      <button type="submit" className="btn btn-secondary btn-block">Send Message</button>
    </form>
  </div>
);

export default Contact;
