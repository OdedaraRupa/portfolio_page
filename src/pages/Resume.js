import React from 'react'
import Breadcrumb from "../components/Breadcrumb";
export default function Resume() {
  const resumeItems = [
    { id: 1, year: "2019 - 2022", position: "Web Developer", company: "Fatah Digital", content: 'Three years of experience as a web developer, working with team, Learned Time Management, problem solving technique and any more.' },
    { id: 2, year: "2017 - 2018", position: "Intern Android Developer", company: "SKY 9 IT Craft", content: '1 year training and worked as a trainee in Android development, Created a university project in Android development.' },

  ];
  const educationItems = [
    { id: 1, year: "2023 - Pursuing", course: "Master of Science in Cyber Security", university: "New York Institute of Technology", description: 'Currently, pursuing my master from NYIT.' },
    { id: 2, year: "2015 - 2018", course: "Bachelor of Engineering in Computer Engineering  ", university: "Gujarat Technological University", description: 'Graduate with class of distinction.' },
    { id: 3, year: "2012 - 2015", course: "Diploma in Computer Engineering", university: "Gujarat Technological University", description: ''},

  ]
  const Skils = [
    { title: "HTML5", percentage: "95", },
    { title: "css3", percentage: "90", },
    { title: "javascript", percentage: "70", },
    { title: "react js", percentage: "60", },
    { title: "bootstrap", percentage: "90", },
    { title: "sass", percentage: "70", },
    { title: "Firebase", percentage: "60", },
    { title: "Hugo", percentage: "88", }, 
    { title: "Jekyll", percentage: "65", },
    { title: "Adobe XD", percentage: "40", },
    { title: "Adobe PhotoShop", percentage: "40", },

  ]
  const advanceTools = [
    { title: "Source Tree", percentage: "95", },
    { title: "Fork", percentage: "90", },
    { title: "CircleCi", percentage: "70", },
    { title: "Github", percentage: "60", },
    { title: "Gitlab", percentage: "90", },
    { title: "Git", percentage: "70", }
  ]
  const personalSKils = [
    { title: "Time Management", percentage: "90", },
    { title: "Effeciency", percentage: "70", },
    { title: "Intigrity", percentage: "80", }

  ]
  return (
    <div className="col-lg-10 col-md-9">
      <div className='page-container' >
        <Breadcrumb></Breadcrumb>
        <div className='row'>
          <div className=" col-md-6">
            <h2 className=''>Education</h2>
            <div className="resume-items ">
              {educationItems.map((Item) =>
                <div className="item" key={Item.id} >
                  <span className="bullet"></span>
                  <div className="card" >
                    <div className="card-header ">
                      <span className="year text-primary"><i className="fa fa-calendar"></i>
                        <i className="fa fa-caret-right"></i>{Item.year}</span>
                      <span className="d-block">
                        <b>{Item.course}</b>
                        <span className="separator"></span>
                        <span ><b>{Item.university}</b></span>
                      </span>
                    </div>
                    <div className="card-body"><p>{Item.description}</p>
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
          <div className=" col-md-6">
            <h2>Experience</h2>
            <div className="resume-items ">
              {resumeItems.map((Item,index) =>
                <div className="item"key={index} >
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

          <div className='col-md-12'>
            <h2 className='mt-4'>Software Skils</h2>
            <div className='row'>
              {Skils.map((Item, index) =>
                <div className="col-lg-4 col-md-6" key={index}>
                  <span className="skill-text">{Item.title}</span>
                  <div className="chart-bar">
                    <span className="item-progress " data-percent={Item.percentage} style={{ width: Item.percentage + "%" }}></span>
                    <span className="percent text-primary" style={{ right: `calc((100% - ${Item.percentage + "%"}) - 21px)` }}>{Item.percentage}%<b className="arrow"></b></span>
                  </div>
                </div>
              )}

            </div>
          </div>
          <div className='col-md-12'>
            <h2 className='mt-4'>Advanced Tools</h2>
            <div className='row'>
              {advanceTools.map((Item, index) =>
                <div className="col-lg-4 col-md-6" key={index}>
                  <span className="skill-text">{Item.title}</span>
                  <div className="chart-bar">
                    <span className="item-progress " data-percent={Item.percentage} style={{ width: Item.percentage + "%" }}></span>
                    <span className="percent text-primary" style={{ right: `calc((100% - ${Item.percentage + "%"}) - 21px)` }}>{Item.percentage}%<b className="arrow"></b></span>
                  </div>
                </div>
              )}

            </div>
          </div>
          <div className='col-md-12'>
            <h2 className='mt-4'>Personal Skils</h2>
            <div className='row'>
              {personalSKils.map((Item, Index) =>
                <div className='col-lg-4 col-md-6' key={Index}>
                  <span className="skill-text">{Item.title}</span>
                  <div className='circular-bar'>
                    <div className='outer-circle' style={{ background: `linear-gradient(to right, #1ea8e7 ${Item.percentage + "%"} , #f9f9f9 50%)` }}>
                      <div className='inner-circle'>
                        <span className='total-count text-primary'>
                          {Item.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
