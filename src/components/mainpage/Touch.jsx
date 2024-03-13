import React, { useState } from 'react';

function Touch() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const addTouch = () => {
    setSubmittedData({ name, mail });
  };

  return (
    <div className='contact'>
      <h3>GET IN TOUCH</h3>
      <div className='labels'>
        <div className='label'>
          <p>Full Name*</p>

          <input
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" // Change type to "text"
          />
        </div>
        <div className='label'>
          <p>Email*</p>
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)} // Corrected setter function
            className='input'
            type="email" // Change type to "email"
          />
        </div>
      </div>
      <textarea />
      <button type="submit" onClick={addTouch}>Submit</button> {/* Removed unnecessary <a> tag */}
    </div>
  );

}

export default Touch;
