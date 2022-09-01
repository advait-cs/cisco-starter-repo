import React from 'react';
import Card from './Card';
import './css/exhibit.css';
import Pylon from './Pylon.js'


const Exhibit = () => {
  return (
    <div className='exhibit'>
    <div className="exhibitContainer">
      <Card/>
      <Pylon/>
    </div>
    </div>
  )
}

export default Exhibit