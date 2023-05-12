import React, { useState,useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function validate() {
    if (name === "") {
      alert("Name is Empty");
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(name)) {
      alert("Invalid Name");
      return false;
    }


    if (email === "") {
      alert("Email is Empty");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address");
      return false;
    }
    return true;
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8o7769v', 'template_vwen0br', form.current, 'xOgT29h1E1cGEgTYW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setName("");
      setEmail("");
      setMessage("");
      sendEmail(e);
      alert("Message Sent Successfully")
    }
  };

  return (
    <div className="form-container rounded ">
      <form onSubmit={handleSubmit} ref={form} className='bgcolor '>
        <p style={{fontSize:'2rem', color:'AliceBlue'}} className='tiltneon'>Connect To Me</p>
        <label className='top'>Name</label>
        <input
          name="from_name"
            type="text"
            id="from_name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          
        />
        <p className='top'>Email</p>
        <input
          type="email"
          name="email"
            id="email"
          value={email}
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <p className='mtop'>Message</p>
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Feel free to ask anything"
          onChange={(e) => setMessage(e.target.value)}
          
        ></textarea><br/>
        <button type="submit" className='rounded'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
