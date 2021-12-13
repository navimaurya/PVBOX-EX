import React from 'react'
import logo from './logo.png'

const Empty = () => (
    <div className='text-center'> 
        <img src={logo} alt="logo" style={{ height: '15rem'}}/>
        <h2 className='font-weight-light display-6'  >Welocome to PVBOX</h2>
        <p className='font-weight-light m-0'  >Send and receive messages without instantly.</p>
        <p  className='font-weight-light'  >Use PVBOX on multiple devices at the same time.</p>
    </div>
)
export default Empty;