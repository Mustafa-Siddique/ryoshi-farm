import React from 'react'
import logo from '../images/ryoshilogo.png'

export default function Footer() {
  return (
    <div className='footer text-center'>
      <img className='mx-auto d-block' src={logo} alt="" style={{maxHeight:"150px", zIndex:"5"}} />
      <p className="fs-4">BUY $RYOSHI</p>
      <div className="mt-3">
        <button className="btn btn-outline-dark me-2">RyoshiSwap</button>
        <button className="btn btn-outline-dark">PancakeSwap</button>
      </div>
      <div className="footerSocial my-3">
        <a href="#" className="fSocial"></a>
        <a href="#" className="fSocial"></a>
        <a href="#" className="fSocial"></a>
        <a href="#" className="fSocial"></a>
        <a href="#" className="fSocial"></a>
        <a href="#" className="fSocial"></a>
      </div>
      <div className="py-3">
      <p className='mb-0'><a href="#" className='text-secondary'>Frequently Asked Questions</a></p>
      <p>Copyright &copy;2022 Ryoshitoken.com. All rights reserved. Powered by <a className='text-secondary' href="https://kesaviwebsolutions.com/" target="_blank">KWS</a></p>
      </div>
    </div>
  )
}
