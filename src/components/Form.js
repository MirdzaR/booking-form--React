import React, { useState } from 'react';
import emailjs from '@emailjs/browser'

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    console.log(checkboxes)

    // Box checked
    if(checked) {
      console.log(value)
      setCheckboxes([...checkboxes, value]);
    // Box unchecked
    } else {
      setCheckboxes(...checkboxes.filter((e) => e !==value));
    }
    console.log(checkboxes)
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e)
  }


  return (
    <form className='register-form' onSubmit={sendEmail}>
      <div className='input-group required'>
        <label htmlFor="name" className='input-label'>Name</label>
        <input type="text" className="input-field" name="Name" id="name" required />
      </div>
      <div className='input-group required'>
        <label htmlFor="email" className='input-label'>Email</label>
        <input type="email" className="input-field" name="Email" id="email" />
      </div>
      <div className='input-group required'>
        <label htmlFor="phone" className='input-label'>Phone</label>
        <input type="number" className="input-field" name="Phone" id="phone" />
      </div>
      <div className='input-group required'>
        <label htmlFor="check-in" className='input-label'>Check In</label>
        <input type="date" className="input-field" name="Check In" id="check-in" />
      </div>
      <div className='input-group required'>
        <label htmlFor="check-out" className='input-label'>Check Out</label>
        <input type="date" className="input-field" name="Check Out" id="check-out" />
      </div>
      <div className='input-group required'>
        <label htmlFor="adults" className='input-label'>Number of Adults</label>
        <input type="number" className="input-field" name="Adults" id="adults" required/>
      </div>
      <div className='input-group'>
        <label htmlFor="infants" className='input-label'>Number of Infants (0-3 years)</label>
        <input type="number" className="input-field" name="Infants" id="infants" />
      </div>
      <div className='input-group'>
        <label htmlFor="children" className='input-label'>Number of Children (3-16 years)</label>
        <input type="number" className="input-field" name="Children" id="children" />
      </div>

      <p className='float-text'>Additional options:</p>

      <ul className='checkbox-group'>
        <li>
          <label className="checkbox-label" htmlFor="car"> Car </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="options"
            value="Car"
            id="car"
            // onChange={handleChange}
          />
        </li>
        <li>
          <label className="checkbox-label" htmlFor="car2"> Car 2 </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="options"
            value="Car"
            id="car2"
            // onChange={handleChange}
          />
        </li>
        <li>
          <label className="checkbox-label" htmlFor="car3"> Car 3 </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="options"
            value="Car"
            id="car3"
            // onChange={handleChange}
          />
        </li>
        <li>
          <label className="checkbox-label" htmlFor="car4"> Car 4 </label>
          <input
            className="checkbox-input"
            type="checkbox"
            name="options"
            value="Car"
            id="car4"
            // onChange={handleChange}
          />
        </li>
      </ul>
      <button type="submit" className='submit-btn'>Book Visit</button>
    </form>
  )
}
