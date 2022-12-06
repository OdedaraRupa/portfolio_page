import React from 'react'
import Breadcrumb from "../components/Breadcrumb";
export default function Resume() {
  const resumeItems = [
    { id: 1, year: "2019 - 2022", position: "Web Developer", company: "Fatah Digital", content: 'Welcome to learning React!' },
    { id: 2, year: "2017 - 2018", position: "Intern Android Developer", company: "SKY 9 IT Craft", content: 'Welcome to learning React!' },

  ];
  const Skils = [
    { title: "HTML5", percentage: "95", },
    { title: "css3", percentage: "90", },
    { title: "javascript", percentage: "70", },
    { title: "react js", percentage: "60", },
    { title: "bootstrap", percentage: "90", },
    { title: "sass", percentage: "70", },
    { title: "Adobe XD", percentage: "40", },
    { title: "Adobe PhotoShop", percentage: "40", }


  ]
  return (
    <div className="col-md-10 ">
      <div className='page-container' >
        <Breadcrumb></Breadcrumb>
        <div className='row'>
          <div className=" col-md-6">
            <h2>Experience</h2>
            <div className="resume-items ">
              {resumeItems.map((Item) =>
                <div className="item">
                  <span className="bullet"></span>
                  <div className="card">
                    <div className="card-header ">
                      <span className="year text-primary"><i className="fa fa-calendar"></i>
                        <i className="fa fa-caret-right"></i>{Item.year}</span>
                      <span className="d-block">
                        <b>{Item.position}</b>
                        <span className="separator"></span>
                        <span ><b>{Item.company}</b></span>
                      </span>
                    </div>
                    <div className="card-body"><p>{Item.content}</p>
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
          <div className=" col-md-6">
            <h2 className=''>Education</h2>
            <div className="resume-items ">
              {resumeItems.map((Item) =>
                <div className="item" key={Item.id} >
                  <span className="bullet"></span>
                  <div className="card" >
                    <div className="card-header ">
                      <span className="year text-primary"><i className="fa fa-calendar"></i>
                        <i className="fa fa-caret-right"></i>{Item.year}</span>
                      <span className="d-block">
                        <b>{Item.position}</b>
                        <span className="separator"></span>
                        <span ><b>{Item.company}</b></span>
                      </span>
                    </div>
                    <div className="card-body"><p>{Item.content}</p>
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
          <div className='col-md-12'>
            <h2 className='mt-4'>Software Skils</h2>
            <div className='row'>
              {Skils.map((Item,index) =>
                <div className="col-md-4" key={index}>
                  <span className="skill-text">{Item.title}</span>
                  <div className="chart-bar">
                    <span className="item-progress " data-percent={Item.percentage} style={{ width: Item.percentage +"%"  }}></span>
                    <span className="percent text-primary" style={{ right: `calc((100% - ${Item.percentage+"%"}) - 21px)` }}>{Item.percentage}%<b className="arrow"></b></span>
                  </div>
                </div>
              )}

            </div>
          </div>
          <div className='col-md-12'>
          <h2 className='mt-4'>Personal Skils</h2>
          <div className='row'>
            <div className='col-md-4'>
              <div className='circular-bar'>
                <div className='outer-circle' style={{background: `linear-gradient(to left, #1ea8e7 80%, #f9f9f9 50%)`}}>
                  <div className='inner-circle'>
                    <span className='total-count text-primary'>
                      80%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}
