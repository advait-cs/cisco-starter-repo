import React from 'react';
import Card from './Card';
import './css/exhibit.css';

const Exhibit = () => {
  return (
    <div className='exhibit'>
    <div className="exhibitContainer">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
  )
}

export default Exhibit