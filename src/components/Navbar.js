import React,{useEffect, useState} from "react";
import {
  FaRedditAlien,
  FaDiscord,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from '../images/ryoshilogo.png'
import { getUserAddress, login } from './../Web3/Web3_Funtions'


export default function Navbar() {

  const [address, setAddress] = useState()

  const login = async()=>{
    const data = await window.ethereum.enable();
    if(data){
      
      const address = await getUserAddress()
      window.address = address
      setAddress(address)
      console.log(' user address ', address)
    }
    
  }
  
  window.ethereum.on('accountsChanged', (accounts) => {
    setAddress(accounts[0])
    window.address = accounts[0]
  });

  const slicing =(add)=>{
    const first = add.slice(0,4);
    const second = add.slice(38);
    return first + '...' + second
  }

  

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" /> &nbsp;
          <span>RYOSHI TOKEN</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Why Ryoshi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Moonmap
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider bg-secondary" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Audit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Goldpaper
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="https://ryoshitoken.com/" target="_blank"  rel="noreferrer">
                Back to main website
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.dextools.io/app/ether/pair-explorer/0x5e4d0baf57a68956180580b94c1271c37558d300" target="_blank"  rel="noreferrer">
                Swap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Farm
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://ryoshibillionaireclubnft.com/" target="_blank"  rel="noreferrer">
                NFT
              </a>
            </li>
            <li className="nav-item">
              <a className="headerSocials" href="https://www.reddit.com/r/RyoshiTokenBSC" target="_blank"  rel="noreferrer">
                <FaRedditAlien />
              </a>
              <a className="headerSocials" href="https://t.co/E8u0GkUXP4?amp=1" target="_blank"  rel="noreferrer">
                <FaDiscord />
              </a>
              <a className="headerSocials" href="https://twitter.com/TokenRyoshi" target="_blank"  rel="noreferrer">
                <FaTwitter />
              </a>
              <a className="headerSocials" href="https://t.me/ryoshitokenofficial" target="_blank"  rel="noreferrer">
                <FaTelegramPlane />
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-warning" onClick={()=> login()}>{address ? slicing(address) : 'Connect'}</button>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
