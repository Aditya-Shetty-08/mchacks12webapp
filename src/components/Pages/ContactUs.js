import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    // <div>
    //   <h1 className='contact-us'>Contact Us</h1>;
    //   <h2 className='contact-us-h2'> +1 345 453 2006</h2>
    // </div>

    <div className="contact-us-container" id="#top">
      <h1>Contact Us</h1>
      <p>
        We are here to assist you. Feel free to reach out to us via phone, email, or by visiting our office.
      </p>
      <div className="contact-info">
        <div>
          <h2>Phone</h2>
          <p>+1 345 453 2006</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>support@healer.com</p>
        </div>
        <div>
          <h2>Address</h2>
          <p>123 Healer Street, Health City, HE123</p>
        </div>
      </div>
      <form className="contact-form">
        <h2>Send us a Message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>


  );
}

export default ContactUs;