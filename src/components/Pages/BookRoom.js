import React from 'react';
import '../../App.css';
import PatientForm from '../PatientForm';

function BookRoom() {
  return (
    <div>
      <h1 className='bookroom'> BOOK A BED</h1>;
      <h2 className='h2-services'> Book a bed while coming to the hospital </h2>
      <PatientForm/>
    </div>
  )
}

export default BookRoom;