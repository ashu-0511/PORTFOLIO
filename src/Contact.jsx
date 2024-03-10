import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert('Form submitted successfully!');

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='formsection'>

      <form onSubmit={handleSubmit} className="secondsection" >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className='input1'
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='input2'
          />
        </div>
        <div>
          <label htmlFor="message" className='label3'>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className='input3'
          />
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
