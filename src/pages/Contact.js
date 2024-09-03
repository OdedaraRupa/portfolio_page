import React from 'react'
import Breadcrumb from "../components/Breadcrumb";
export default function About() {
  const contactList = [
    {
      icon: "fa fa-envelope",
      title: "Email",
      content: "odedararupa35@gmail.com",
      link: "mailto:odedararupa35@gmail.com"
    }
  
  ]
  return (
    <div className="col-lg-10 col-md-9 ">
      <div className='page-container contact-wrapper'>
        <Breadcrumb></Breadcrumb>
        <div className='row '>

          <div className='col-lg-10 hero-wrapper mt-4'>
            <div className='row'>
              <div className='col-lg-6'>
                
                <ul className='contact-list'>
                  <h2 className='mb-3'>Contact</h2>
                  {contactList.map((item, index) => {
                    return (
                      <li className='contact-inner' key={index}>
                        <div className='icon'>
                          <i className={item.icon}></i>
                        </div>
                        <div className='content'>
                          <h4><b>{item.title}</b></h4>
                          <p><a href={item.link}>{item.content}</a></p>
                        </div>
                      </li>
                    )
                  })}

                </ul>
              </div>
              <div className='col-lg-6'>
                
                <ul className='row social-detail'>
                  <h2>Social</h2>
                  <li className='col-md-3'><a href="https://www.linkedin.com/in/rupa-odedara/" target="_blank" rel="noopener noreferrer"><i className='fa fa-linkedin'></i></a></li>
                  <li className='col-md-3'><a href="https://github.com/OdedaraRupa" target="_blank" rel="noopener noreferrer"><i className='fa fa-github'></i></a></li>
                  <li className="col-md-3"><a href="https://www.facebook.com/rupa.odedara/" target="_blank" rel="noopener noreferrer"><i className='fa fa-facebook'></i></a></li>
                  <li className='col-md-3'><a href="https://www.instagram.com/rupa_odedara/" target="_blank" rel="noopener noreferrer"><i className='fa fa-instagram'></i></a></li>
                  

                </ul>
              </div>
            </div>

           
          </div>

        </div>
      </div>



    </div>
  )
}
