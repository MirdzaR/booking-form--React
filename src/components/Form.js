import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Checklist } from './Checklist';

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [infants, setInfants] = useState("");
  const [children, setChildren] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

  }

  return (
    <form className='register-form' onSubmit={sendEmail}>
      <div className='input-group required'>
        <label htmlFor="name" className='input-label'>Name</label>
        <input type="text" className="input-field" name="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className='input-group required'>
        <label htmlFor="email" className='input-label'>Email</label>
        <input type="email" className="input-field" name="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='input-group required'>
        <label htmlFor="phone" className='input-label'>Phone</label>
        <input type="number" className="input-field" name="Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className='input-group required'>
        <label htmlFor="check-in" className='input-label'>Check In</label>
        <input type="date" className="input-field" name="Check In" id="check-in" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
      </div>
      <div className='input-group required'>
        <label htmlFor="check-out" className='input-label'>Check Out</label>
        <input type="date" className="input-field" name="Check Out" id="check-out" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
      </div>
      <div className='input-group required'>
        <label htmlFor="adults" className='input-label'>Number of Adults</label>
        <input type="number" className="input-field" name="Adults" id="adults" value={adults} onChange={(e) => setAdults(e.target.value)} required />
      </div>
      <div className='input-group'>
        <label htmlFor="infants" className='input-label'>Number of Infants (0-3 years)</label>
        <input type="number" className="input-field" name="Infants" id="infants" value={infants} onChange={(e) => setInfants(e.target.value)} />
      </div>
      <div className='input-group'>
        <label htmlFor="children" className='input-label'>Number of Children (3-16 years)</label>
        <input type="number" className="input-field" name="Children" id="children" value={children} onChange={(e) => setChildren(e.target.value)} />
      </div>

      <Checklist />
      <button type="submit" className='submit-btn'>Book Visit</button>
    </form>
  )
}
