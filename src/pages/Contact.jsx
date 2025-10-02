import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "abda80e5-3eb1-4db7-b462-175b8eed3d4a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        event.target.reset(); // Reset form after successful submission
        setResult("");
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred while sending the message.");
    }
  };

  return (
    <section className="contact">
      <form className="contact-form" onSubmit={onSubmit}>
        <h2>Contact Form</h2>

        <div className="input-Box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>

        <div className="input-Box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        <div className="input-Box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>

        {result && <p className="status">{result}</p>}
      </form>
    </section>
  );
};

export default Contact;


