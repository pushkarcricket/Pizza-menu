import React from 'react'

export default function Footer() {

  const hour=new Date().getHours();
  const openHour=10;
  const closeHour=22;
  const isOpen= hour >= openHour && hour <= closeHour;
  console.log(isOpen);


    const newHour=new Date().getHours();
    console.log(newHour);
  return (
    <div className=''>
        <footer className='footer'> {isOpen && <p> We are open until{closeHour} :00. come visit us or order online.
        <button className='btn'>Order</button>
        </p>
       
        }  </footer>
    </div>
  )
}
