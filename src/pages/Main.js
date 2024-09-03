import React from 'react'
import profileImage from "../assets/images/profile.jpg"
export default function Main() {
  return (
    <>
      {/* <!-- Main Body --> */}

      <div className="col-lg-10 col-md-9 wrapper bg-hero">
        <div className="bg-circle top-right-circle"></div>
        <div className="bg-circle top-left-circle"></div>
        <div className="bg-circle bottom-left-circle"></div>
        <div className="bg-circle bottom-right-circle"></div>
        <main>
          <div className="container">
            <div className="row justify-content-center" style={{ alignSelf: "center" }}>
              <div className="col-md-10 hero-wrapper align-self-center"  >

                {/* <!-- <h1>Rupa Odedara</h1> --> */}
                <div className="row hero-section">
                  <div className="col-lg-8 col-md-12">
                    <div className="hero-content">
                      <div className="shape shape-box-1"></div>
                      <div className="shape shape-box-2"></div>
                      <span>Hello, I'm</span>
                      <h1 className='hero-title'>Rupa Odedara</h1>


                      <p>Engineer Mind with problem solving skills and keen interest in Web Development since 2013.Currently Pursuing a career in Cyber Security to utilize my knowledge and skills in protecting valuable information and ensuring the confidentiality, integrity, and availability of computer systems</p>
                      {/* <a href="" className="button btn-bg" ><span>About Me	</span> </a> */}
                    </div>

                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="hero-image">
                      <div className="shape-square"></div>
                      <img src={profileImage} alt="" />
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>

      </div>
    </>
  )
}
