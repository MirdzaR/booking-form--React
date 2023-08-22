import React from 'react'
import "./ReservationForm.css"
import { Form } from './Form';


export const ReservationForm = () => {
  return (
    <div className='container'>
      <h1>Reservation Form Request</h1>
      <p>Fill out this form to book a visit</p>
      <div className='form'>
        <Form />
      </div>
    </div>
  )
}
