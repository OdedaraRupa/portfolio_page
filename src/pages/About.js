import React from 'react'
import Breadcrumb from "../components/Breadcrumb";
import {
  Link
} from "react-router-dom";

export default function About() {

  return (

    <div className="col-md-10 ">
      <div className='page-container' >
        <Breadcrumb  ></Breadcrumb>

        <div className='row justify-content-center'>
          <div className='col-md-5'>
            <div className="card text-center about-card" >
              <div className='card-img-cover'>

              </div>
              <div className="card-body">
                <h5 className="card-title"><b>Rupa Odedara</b></h5>
                <div className="text-muted mb-2">Web Devloper</div>
                <p className="card-text text-muted mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/contact" className="button button-primary">Contact Me</Link>


              </div>
            </div>
          </div>
          <div className='col-md-7'>
            <div className='row justify-content-center'>
              <div className='col-md-6 mt-4'>
                <div className="card text-center about-card" >
                  <div className="card-body">
                    <span className='text-muted'></span>
                    <div className="mb-2 text-number">20+</div>
                    <div className="card-title" style={{ display: "flex", justifyContent: "space-between", fontSize: "20px" }}> Projects
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="cs-icon diploma text-number">
                        <path d="M15 3.99999V3.99999C16.1046 3.99999 17 4.89542 17 5.99999L17 14.5C17 15.9044 17 16.6067 16.6629 17.1111C16.517 17.3295 16.3295 17.517 16.1111 17.6629C15.6067 18 14.9045 18 13.5 18L6.5 18C5.09554 18 4.39331 18 3.88886 17.6629C3.67048 17.517 3.48298 17.3295 3.33706 17.1111C3 16.6067 3 15.9044 3 14.5L3 7.49999C3 6.09553 3 5.3933 3.33706 4.88886C3.48298 4.67047 3.67048 4.48297 3.88886 4.33706C4.39331 4 5.09554 4 6.5 4L9.5 3.99999"></path>
                        <path d="M14 6L14 13.3252C14 13.5663 14 13.6868 13.9433 13.7319C13.9196 
                        13.7507 13.8908 13.7619 13.8606 13.764C13.7884 13.7691 13.7069 13.6803 
                        13.544 13.5025L13.29 13.2255C12.7767 12.6655 12.5201 12.3856 12.2057 
                        12.3195C12.0701 12.2909 11.9299 12.2909 11.7943 12.3195C11.4799 12.3856 
                        11.2233 12.6655 10.71 13.2255L10.456 13.5025C10.2931 13.6803 10.2116 13.7691 
                        10.1394 13.764C10.1092 13.7619 10.0804 13.7507 10.0567 13.7319C10 13.6868 10 
                        13.5663 10 13.3252L10 6"></path>
                        <circle cx="12" cy="4" r="3"></circle><path d="M6 15H7M6 12H7M6 9H7"></path></svg>

                    </div>


                  </div>
                </div>
              </div>  <div className='col-md-6 mt-4'>
                <div className="card text-center about-card" >
                  <div className="card-body">
                    <span className='text-muted'></span>
                    <div className="mb-2 text-number">3+</div>
                    <div className="card-title" style={{ display: "flex", justifyContent: "space-between", fontSize: "20px" }}> Experience
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="cs-icon diploma text-number">
                        <path d="M15 3.99999V3.99999C16.1046 3.99999 17 4.89542 17 5.99999L17 14.5C17 15.9044 17 16.6067 16.6629 17.1111C16.517 17.3295 16.3295 17.517 16.1111 17.6629C15.6067 18 14.9045 18 13.5 18L6.5 18C5.09554 18 4.39331 18 3.88886 17.6629C3.67048 17.517 3.48298 17.3295 3.33706 17.1111C3 16.6067 3 15.9044 3 14.5L3 7.49999C3 6.09553 3 5.3933 3.33706 4.88886C3.48298 4.67047 3.67048 4.48297 3.88886 4.33706C4.39331 4 5.09554 4 6.5 4L9.5 3.99999"></path>
                        <path d="M14 6L14 13.3252C14 13.5663 14 13.6868 13.9433 13.7319C13.9196 13.7507 13.8908 13.7619 13.8606 13.764C13.7884 13.7691 13.7069 13.6803 13.544 13.5025L13.29 13.2255C12.7767 12.6655 12.5201 12.3856 12.2057 12.3195C12.0701 12.2909 11.9299 12.2909 11.7943 12.3195C11.4799 12.3856 11.2233 12.6655 10.71 13.2255L10.456 13.5025C10.2931 13.6803 10.2116 13.7691 10.1394 13.764C10.1092 13.7619 10.0804 13.7507 10.0567 13.7319C10 13.6868 10 13.5663 10 13.3252L10 6"></path><circle cx="12" cy="4" r="3"></circle><path d="M6 15H7M6 12H7M6 9H7"></path></svg>
                    </div>


                  </div>
                </div>
              </div>


              <div className='col-md-6 mt-4'>
                <div className="card text-center about-card" >
                  <div className="card-body">
                    <span className='text-muted'></span>
                    <div className="mb-2 text-number">15+</div>
                    <div className="card-title" style={{ display: "flex", justifyContent: "space-between", fontSize: "20px" }}> Happy Customer

                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="cs-icon diploma text-number">
                        <path d="M15 3.99999V3.99999C16.1046 3.99999 17 4.89542 17 5.99999L17 14.5C17 15.9044 17 16.6067 16.6629 17.1111C16.517 17.3295 16.3295 17.517 16.1111 17.6629C15.6067 18 14.9045 18 13.5 18L6.5 18C5.09554 18 4.39331 18 3.88886 17.6629C3.67048 17.517 3.48298 17.3295 3.33706 17.1111C3 16.6067 3 15.9044 3 14.5L3 7.49999C3 6.09553 3 5.3933 3.33706 4.88886C3.48298 4.67047 3.67048 4.48297 3.88886 4.33706C4.39331 4 5.09554 4 6.5 4L9.5 3.99999"></path>
                        <path d="M14 6L14 13.3252C14 13.5663 14 13.6868 13.9433 13.7319C13.9196 13.7507 13.8908 13.7619 13.8606 13.764C13.7884 13.7691 13.7069 13.6803 13.544 13.5025L13.29 13.2255C12.7767 12.6655 12.5201 12.3856 12.2057 12.3195C12.0701 12.2909 11.9299 12.2909 11.7943 12.3195C11.4799 12.3856 11.2233 12.6655 10.71 13.2255L10.456 13.5025C10.2931 13.6803 10.2116 13.7691 10.1394 13.764C10.1092 13.7619 10.0804 13.7507 10.0567 13.7319C10 13.6868 10 13.5663 10 13.3252L10 6"></path><circle cx="12" cy="4" r="3"></circle><path d="M6 15H7M6 12H7M6 9H7"></path></svg>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
