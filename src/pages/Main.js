import React from 'react'
import profileImage from "../images/profile.jpg"
export default function Main() {
  return (
    <>
      {/* <!-- Main Body --> */}

      <div className="col-md-10 wrapper bg-hero">
        <div className="bg-circle top-right-circle"></div>
        <div className="bg-circle top-left-circle"></div>
        <div className="bg-circle bottom-left-circle"></div>
        <div className="bg-circle bottom-right-circle"></div>
        <main>
          <div className="container">
            <div className="row justify-content-center" style={{alignSelf:"center" }}>
              <div className="col-md-10 hero-wrapper align-self-center"  >

                {/* <!-- <h1>Rupa Odedara</h1> --> */}
                <div className="row hero-section">
                  <div className="col-md-8">
                    <div className="hero-content">
                      <div className="shape shape-box-1"></div>
                      <div className="shape shape-box-2"></div>
                      <span>Hello, I'm</span>
                      <h1 className='hero-title'>Rupa Odedara</h1>
                      <p>Lorem ipsum dolor, sit ametas q earum assumenda reprehenderit itaque esse laboriosam suscipit enim quia eum.</p>
                      {/* <a href="" className="button btn-bg" ><span>About Me	</span> </a> */}
                    </div>

                  </div>
                  <div className="col-md-4">
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
