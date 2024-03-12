import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4zjo726', 'template_knia02g', form.current, {
        publicKey: 'Q8aPp3cPuQIOgQLk7',
      })
      .then(
        () => {
          alert('Successfully sent');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='formsection'>

      <form ref={form} onSubmit={sendEmail} className="secondsection" >
        <div>
          <label type="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            className='input1'
          />
        </div>
        <div>
          <label type="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            className='input2'
          />
        </div>
        <div>
          <label type="message" className='label3'>Message:</label>
          <textarea
            id="message"
            name="message"
            className='input3'
          />
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
