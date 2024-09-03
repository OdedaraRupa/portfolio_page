import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggledisable = () => setIsOpen(false)
  return (
    <>
      {/* Mobile Navbar  */}
      <div className="nav-mobile col-md-12">
        <div className="row nav-wrapper">
          <div className="col-1">
            <h3>RO</h3>
          </div>
          <div className="col-2">
            <button className="nav-toggler" type="button" onClick={toggle} >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20" height="20"  className= {`cs-icon menu ${isOpen === true ? 'btn-open' : 'btn-close'}`} ><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className= {`cs-icon menu ${isOpen === true ? 'btn-close' : 'btn-open'}`}><path d="M2 3 18 3M2 10 18 10M2 17 18 17"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* NavBar  */}
      <div className="col-lg-2 col-md-3  wrapper ">
        <div className= {`nav-bar ${isOpen ? 'open-nav' : ''}`} >
          <div className="nav-container">
            <div className="nav-content d-flex">
              {/* <div className="logo"><h1><b>RO</b></h1></div>  */}
              <div className="user-container">
                <div className="profile">

                </div>
                <div className="profile-name">
                  <span>Rupa Odedara</span>
                </div>
              </div>
              <div className="nav-menu">
                <ul className="menu">
                  <li className="menu-item">
                    <Link to="/" onClick={toggledisable}>
                      {/* <i className="fa fa-home"></i>  */}
                      <svg xmlns="http://www.w3.org/2000/svg" height="600pt" viewBox="-19 -19 600 600" width="600pt" className="svg replaced-svg"><path d="m251.25 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0"></path><path d="m562.5 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0"></path><path d="m251.25 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0"></path><path d="m562.5 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0"></path></svg>
                      <span>Home</span></Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about"  onClick={toggledisable}>
                      {/* <i className="fa fa-user"></i>  */}
                      <svg xmlns="http://www.w3.org/2000/svg" height="480pt" viewBox="-18 -15 480 480" width="480pt" className="svg replaced-svg"><path d="m431.167969 0h-332.8125c-6.855469 0-12.433594 5.523438-12.5 12.375l-2.976563 294.402344h-70.546875c-6.902343 0-12.5 5.597656-12.5 12.5v46.472656c0 44.578125 34.160157 81.160156 77.214844 84.050781.726563.128907 1.464844.199219 2.199219.199219h277.359375c.453125 0 .914062-.03125 1.363281-.078125 1 .039063 1.992188.078125 3.003906.078125 45.597656 0 82.699219-37.796875 82.699219-84.25v-353.25c0-6.90625-5.597656-12.5-12.5-12.5zm-406.335938 365.75v-33.972656h253.390625v33.972656c-.042968 22.121094 8.558594 43.386719 23.980469 59.25h-219.667969c-31.816406 0-57.703125-26.582031-57.703125-59.25zm393.835938 0c0 32.671875-25.886719 59.25-57.746094 59.25-31.816406 0-57.699219-26.582031-57.699219-59.25v-46.472656c0-6.902344-5.597656-12.5-12.5-12.5h-182.835937l2.84375-281.777344h307.9375zm0 0"></path><path d="m174.667969 92.890625h58.433593c6.902344 0 12.5-5.59375 12.5-12.5s-5.597656-12.5-12.5-12.5h-58.433593c-6.898438 0-12.5 5.59375-12.5 12.5s5.601562 12.5 12.5 12.5zm0 0"></path><path d="m174.667969 175.226562h169.957031c6.902344 0 12.5-5.601562 12.5-12.5 0-6.90625-5.597656-12.5-12.5-12.5h-169.957031c-6.898438 0-12.5 5.59375-12.5 12.5 0 6.898438 5.601562 12.5 12.5 12.5zm0 0"></path><path d="m174.667969 257.554688h169.957031c6.902344 0 12.5-5.597657 12.5-12.5 0-6.90625-5.597656-12.5-12.5-12.5h-169.957031c-6.898438 0-12.5 5.59375-12.5 12.5 0 6.902343 5.601562 12.5 12.5 12.5zm0 0"></path></svg>
                      <span>About</span> </Link>
                  </li>
               
                  <li className="menu-item">
                    <Link to="/resume"  onClick={toggledisable}>
                      {/* <i className="fa fa-book"></i>  */}
                      <svg xmlns="http://www.w3.org/2000/svg" height="600pt" viewBox="-62 -19 600 600" width="600pt" className="svg replaced-svg"><path d="m209.582031 276.25c35.695313 0 64.625-28.9375 64.625-64.625 0-35.691406-28.929687-64.625-64.625-64.625-35.691406 0-64.621093 28.933594-64.621093 64.625.042968 35.671875 28.949218 64.578125 64.621093 64.625zm0-104.125c21.886719 0 39.625 17.738281 39.625 39.625 0 21.882812-17.738281 39.625-39.625 39.625-21.882812 0-39.621093-17.742188-39.621093-39.625.003906-21.882812 17.742187-39.617188 39.621093-39.625zm0 0"></path><path d="m209.582031 300.125c-26.4375-.195312-51.816406 10.417969-70.246093 29.375-18.75 19.125-29 45.125-29 73.375.019531 6.894531 5.601562 12.480469 12.5 12.5h173.496093c6.898438-.019531 12.480469-5.605469 12.5-12.5 0-28.25-10.25-54.25-29-73.375-18.433593-18.957031-43.808593-29.570312-70.25-29.375zm-73.371093 90.25c2.136718-16.34375 9.503906-31.554688 21-43.375 13.832031-13.996094 32.695312-21.875 52.371093-21.875 19.679688 0 38.542969 7.878906 52.375 21.875 11.46875 11.832031 18.832031 27.039062 21 43.375zm0 0"></path><path d="m459.582031 129.625h-37.5v-67.125c-.011719-34.511719-27.988281-62.484375-62.5-62.5h-300c-34.511719.015625-62.484375 27.988281-62.5 62.5v437.5c.015625 34.511719 27.988281 62.484375 62.5 62.5h300c34.511719-.015625 62.488281-27.988281 62.5-62.5v-67.125h37.5c6.894531-.019531 12.480469-5.605469 12.5-12.5v-45c-.019531-6.894531-5.605469-12.480469-12.5-12.5h-37.5v-46.625h37.5c6.894531-.019531 12.480469-5.605469 12.5-12.5v-45c-.019531-6.894531-5.605469-12.480469-12.5-12.5h-37.5v-46.625h37.5c6.894531-.019531 12.480469-5.605469 12.5-12.5v-45c-.019531-6.894531-5.605469-12.480469-12.5-12.5zm-62.5 370.375c-.058593 20.683594-16.816406 37.441406-37.5 37.5h-300c-20.683593-.058594-37.441406-16.816406-37.5-37.5v-437.5c.058594-20.683594 16.816407-37.441406 37.5-37.5h300c20.683594.058594 37.441407 16.816406 37.5 37.5zm50-112.125v20h-25v-20zm0-116.625v20h-25v-20zm0-96.625h-25v-20h25zm0 0"></path></svg>
                      <span>Resume</span> </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/portfolio"  onClick={toggledisable}>
                      {/* <i className="fa fa-briefcase"></i>  */}
                      <svg xmlns="http://www.w3.org/2000/svg" height="581pt" viewBox="-18 -40 581.33351 581" width="581pt" className="svg replaced-svg"><path d="m482.773438 74.917969h-90.273438v-38.410157c-.085938-20.914062-17.054688-37.820312-37.96875-37.839843h-164.0625c-20.914062.019531-37.878906 16.925781-37.96875 37.839843v38.410157h-90.273438c-34.460937 0-62.226562 28.222656-62.226562 62.683593v298.566407c-.09375 34.425781 27.746094 62.410156 62.171875 62.5h420.601563c34.429687-.058594 62.289062-28.019531 62.226562-62.449219v-298.621094c0-34.457031-27.765625-62.679687-62.226562-62.679687zm-305.273438-38.410157c.070312-7.113281 5.855469-12.839843 12.96875-12.839843h164.0625c7.113281 0 12.902344 5.726562 12.96875 12.839843v38.410157h-190zm-115.273438 63.410157h420.546876c20.683593.128906 37.347656 17 37.226562 37.683593v48.566407h-495v-48.566407c-.117188-20.683593 16.542969-37.554687 37.226562-37.683593zm457.773438 111.25v63.75h-495v-63.75zm-37.226562 262.5h-420.546876c-20.605468-.046875-37.269531-16.789063-37.226562-37.394531v-136.355469h495v136.25c.101562 20.605469-16.519531 37.394531-37.125 37.5zm0 0"></path></svg>
                      <span>Portfolio</span> </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact"  onClick={toggledisable}>
                      {/* <i className="fa fa-envelope"></i>  */}
                      <svg xmlns="http://www.w3.org/2000/svg" height="560pt" viewBox="-17 -101 560 560" width="560pt" className="svg replaced-svg"><path d="m462.5-5.582031h-400c-34.511719.011719-62.484375 27.988281-62.5 62.5v233.371093c.015625 34.511719 27.988281 62.492188 62.5 62.5h400c34.511719-.007812 62.484375-27.988281 62.5-62.5v-233.371093c-.015625-34.511719-27.988281-62.488281-62.5-62.5zm-400 25h400c18.003906.046875 33.453125 12.824219 36.875 30.496093l-236.875 132.003907-236.875-132.003907c3.421875-17.671874 18.871094-30.449218 36.875-30.496093zm400 308.25h-400c-20.683594-.0625-37.441406-16.816407-37.5-37.5v-212l231.375 128.996093c1.875 1.03125 3.980469 1.59375 6.125 1.628907 2.152344.023437 4.265625-.539063 6.125-1.628907l231.375-128.996093v212c-.015625 20.703125-16.796875 37.480469-37.5 37.5zm0 0"></path></svg>
                      <span>Contact</span> </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
