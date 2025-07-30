import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p className="contact-subtext">I’d love to connect! Here’s how you can reach me:</p>

        <div className="contact-card">
          <p><strong>Email:</strong> <a href="mailto:nnisargaram@gmail.com">nnisargaram@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 9148908929</p>
          <p><strong>Location:</strong> Bengaluru, Karnataka</p>
          <a className="contact-btn" href="mailto:nnisargaram@gmail.com">Send Message</a>
        </div>
      </div> 
    </section>
  );
}

export default Contact;
