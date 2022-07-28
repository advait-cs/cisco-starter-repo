import React, { useEffect, useState } from 'react';
import './css/card.css'

const Card = () => {

  const [users, setUsers] = useState({})
  const [users2, setUsers2] = useState({})

  const fetchData = async () => {
    const response = await fetch("https://api.ipify.org?format=json")
    const response2 = await fetch("https://api.ipify.org?format=json")
    const data = await response.json()
    const data2 = await response2.json()
    setUsers(data)
    setUsers2(data2)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className='card'>
    <div>{users.ip}</div>
    <div>{users2.ip}</div>
    </div>
  )
}

export default Card