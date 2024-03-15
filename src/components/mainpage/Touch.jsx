import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Touch() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4t2ddtt', 'template_c6c5m0m', form.current, {
        publicKey: 'cGZORiRq9dQog-bA6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
      <h3>GET IN TOUCH</h3>
      <form ref={form} onSubmit={sendEmail}>
      <div className='labels'>
        <div className='label'>
          <p>Full Name*</p>

          <input
            className='input'
            name="user_name"
            type="text" 
          />
        </div>
        <div className='label'>
          <p>Email*</p>
          <input
            className='input'
            name="user_email"
            type="email" // Change type to "email"
          />
        </div>
      </div>
      <div className='textarea'>
      <textarea name="message" />
      </div>

      <button type="submit" >Submit</button> {/* Removed unnecessary <a> tag */}
    </form>
    </div>

  );

}

export default Touch;
