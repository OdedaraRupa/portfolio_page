import React from 'react'
import Breadcrumb from "../components/Breadcrumb";

export default function About() {
  const portfolioItems = [
    {
      tab: "business",
      display: "show",
      current: "active",
      businessItems: [
        {
          project_name: "Cardnet",
          project_image:"/images/cardnet.jpg",
          project_url: "https://card.net.in",
          software: ["HTML5", "CSS3", "Bootstrap5", "Hugo", "Javascript"],
          content: 'This website is use to create your stunningly beautiful Digital Visiting Card.'
        },
        {
          project_name: "Gardenuity",
          project_image:"/images/gardenuity.jpg",
          project_url: "https://gardenuity.com/",
          software: ["Angular", "SASS", "jekyll", "Circle Ci", "Javascript"],
          content: 'Through  Match platform, Gardenuity make garden recommendations that will lead to your own "I grew that" moment.'
        },
        {
          project_name: "Globe Above",
          project_image:"/images/globeabove.jpg",
          project_url: "https://globeabove.com/",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript","Jquery"],
          content: 'Globe Above is an Innovation Organization which has Developed a Hybrid Thermoplastic Elastomers, is working on developing eco friendly  alternatives of Silicon, Rubber.'
        },
        {
          project_name: "Think Design",
          project_image:"/images/thinkdesign.jpg",
          project_url: "https://www.thinkdesign.com/",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript","Jquery"],
          content: 'Think Design is best digital marketing agency based on New York.Think Design is creating custom applications and software to reimagining how your business operates.'
        },
        {
          project_name: "Syphonads",
          project_image:"/images/syphonads.jpg",
          project_url: "https://www.syphonads.com/",
          software: ["HTML5", "CSS3", "Bootstrap", "HUGO", "Javascript"],
          content: "SyphonAds uses patent‑pending technology to show targeted and relevant advertisements, and bypasses almost any ad‑blocker while eliminating the need for third party cookies."
        },
        
        {
          project_name: "Storm Api",
          project_image:"/images/stormapi.jpg",
          project_url: "https://stormapi.com/",
          software: ["Bootstrap", "CSS3", "HTML5", "HUGO", "Javascript"],
          content: 'Storm Api is Build Enterprise Grade Mobile Apps and Web Apps faster with secure and reliable BaaS services of StormAPI.'
        },
        {
          project_name: "XB Fincorp",
          project_image:"/images/xbfincorp.jpg",
          project_url: "https://xbfincorp.com/",
          software: ["HUGO", "HTML", "CSS", "Jquery", "Bootstrap","Javascript"],
          content: 'XB Fin Corp helps borrowers invest and diversify portfolios globally by providing the Best service at Low-interest rates.'
        },
        {
          project_name: "CWS",
          project_image:"/images/cws.jpg",
          project_url: "https://wearecws.com/",
          software: ["HTML", "CSS", "HUGO", "Javascript"],
          content: ' CWS is help you with Automation, Infrastructure and Security in the Cloud.'
        },
        {
          project_name: "Khushi Minerals",
          project_image:"/images/khushiminerals.jpg",
          project_url: "https://khushiminerals.com/",
          software: ["HUGO", "CSS", "Bootstrap", "HTML", "Javascript"],
          content: 'Khushi Minerals is Whiting Chalk Powder and other Industrial Minerals Dealer and Manufacturer'
        },
        {
          project_name: "Fatah Digital ",
          project_image:"/images/fatah.jpg",
          project_url: "https://www.fatah.co/",
          software: ["Bootstrap","TwinMax", "CSS3", "HTML", "HUGO", "Javascript","Jquery"],
          content: 'FatahDigital is digital solutions for your business victory'
        },
        {
          project_name: "Solais",
          project_image:"/images/thumb.jpg",
          project_url: "/",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript"],
          content: 'Project with advance tools and responsive'
        },
        {
          project_name: "EOG Api",
          project_image:"/images/eog.jpg",
          project_url: "/#",
          software: ["HTML", "CSS",  "PHP", "Javascript"],
          content: 'EOG Api is live streaming app for police.'
        },
        {
          project_name: "Voice Intellignce",
          project_image:"/images/voice.jpg",
          project_url: "/#",
          software: ["HUGO", "Bootstrap", "CSS", "HTML", "Javascript"],
          content: 'Recordator makes it easy to record your calls and then have them transcribed so that you can read what was said.'
        },
        {
          project_name: "Banking Blog",
          project_image:"/images/thumb.jpg",
          project_url: "/#",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript"],
          content: 'Project with advance tools and responsive'
        }

      ]
    },
    {
      tab: "e-learning",
      display: "",
      current: "",
      businessItems: [
        {
          project_name: "City Technology",
          project_image:"/images/citytech.jpg",
          project_url: "https://www.citytechnology.org/",
          software: ["HUGO", "CSS", "Pure HTML", "Javascript"],
          content: "kids can work, complete curricula and support videos showing you how to design, make and troubleshoot cars, pop-ups and kinetic toys using everyday stuff."
        },
        {
          project_name: "Aspiringtogo",
          project_image:"/images/thumb.jpg",
          project_url: "/",
          software: ["HTML", "CSS", "ootstrap", "HUGO", "Javascript"],
          content: 'Project with advance tools and responsive'
        },
       
        {
          project_name: "Educa Theme",
          project_image:"/images/educa.jpg",
          project_url: "http://cocotemplates.com/html/cocotemplates/html/educa/index.html",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript"],
          content: 'I converted this theme into hugo structure.'
        },
      ]
    },
    {
      tab: "hugo-templates",
      display: "",
      current: "",
      businessItems: [
        {
          project_name: "Storm Api",
          project_image:"/images/stormapi.jpg",
          project_url: "https://stormapi.com/",
          software: ["Bootstrap", "CSS3", "HTML5", "HUGO", "Javascript"],
          content: 'Storm Api is Build Enterprise Grade Mobile Apps and Web Apps faster with secure and reliable BaaS services of StormAPI.'
        },
        {
          project_name: "XB Fincorp",
          project_image:"/images/xbfincorp.jpg",
          project_url: "https://xbfincorp.com/",
          software: ["HUGO", "HTML", "CSS", "Jquery", "Bootstrap","Javascript"],
          content: 'XB Fin Corp helps borrowers invest and diversify portfolios globally by providing the Best service at Low-interest rates.'
        },
        {
          project_name: "Syphonads",
          project_image:"/images/syphonads.jpg",
          project_url: "https://www.syphonads.com/",
          software: ["HTML5", "CSS3", "Bootstrap", "HUGO", "Javascript"],
          content: "SyphonAds uses patent‑pending technology to show targeted and relevant advertisements, and bypasses almost any ad‑blocker while eliminating the need for third party cookies."
        },
        
        {
          project_name: "Globe Above",
          project_image:"/images/globeabove.jpg",
          project_url: "https://globeabove.com/",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript","Jquery"],
          content: 'Globe Above is an Innovation Organization which has Developed a Hybrid Thermoplastic Elastomers, is working on developing eco friendly  alternatives of Silicon, Rubber.'
        },
        {
          project_name: "Khushi Minerals",
          project_image:"/images/khushiminerals.jpg",
          project_url: "https://khushiminerals.com/",
          software: ["HUGO", "CSS", "Bootstrap", "HTML", "Javascript"],
          content: 'Khushi Minerals is Whiting Chalk Powder and other Industrial Minerals Dealer and Manufacturer'
        },
        {
          project_name: "Think Design",
          project_image:"/images/thinkdesign.jpg",
          project_url: "https://www.thinkdesign.com/",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript","Jquery"],
          content: 'Think Design is best digital marketing agency based on New York.Think Design is creating custom applications and software to reimagining how your business operates.'
        },
        {
          project_name: "Cardnet",
          project_image:"/images/cardnet.jpg",
          project_url: "https://card.net.in",
          software: ["HTML5", "CSS3", "Bootstrap5", "Hugo", "Javascript"],
          content: 'This website is use to create your stunningly beautiful Digital Visiting Card.'
        },
        {
          project_name: "Docco",
          project_image:"/images/thumb.jpg",
          project_url: "/#",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript"],
          content: 'Docco is a website which contains information about different structure o hugo and syntex.'
        },
        {
          project_name: "Voice Intellignce",
          project_image:"/images/voice.jpg",
          project_url: "/#",
          software: ["HTML", "CSS", "ootstrap", "HUGO", "Javascript"],
          content: 'Project with advance tools and responsive'
        },
      ]
    },
    {
      tab: "react",
      display: "",
      current: "",
      businessItems: [
        {
          project_name: "Rupa Personal Portfolio Page",
          project_image:"/images/portfolio.jpg",
          project_url: "/",
          software: ["React", "CSS3", "HTML5", "React Bootstrap5","Router"],
          content: 'Personal Portfolio Page'
        },
        {
          project_name: "Gardenuity",
          project_image:"/images/gardenuity.jpg",
          project_url: "https://gardenuity.com/",
          software: ["Angular", "SASS", "jekyll", "Circle Ci", "Javascript","API"],
          content: 'Through  Match platform, Gardenuity make garden recommendations that will lead to your own "I grew that" moment.'
        },
        {
          project_name: "Employee Management",
          project_image:"/images/empmanagement.jpg",
          project_url: "https://fatah-emp-management.netlify.app/",
          software: ["React Js", "SASS", "Firebase", "React Bootstrap","FlexBox React"],
          content: 'Employee management has main 3 role, Admin,Employee and HR,in this application hr and admin can handle all the things related to employee like Task Management,Salary invoice and many more others functinality.'
        },
      ]
    },
    {
      tab: "psd",
      display: "",
      current: "",
      businessItems: [
        {
          project_name: "Air Space",
          project_image:"/images/airspace.jpg",
          project_url: "https://themefisher.com/products/airspace-hugo",
          software: ["HTML", "CSS", "Bootstrap", "HUGO", "Javascript"],
          content: 'Converted this hugo based theme into my own hugo structure(During Training).'
        },
        {
          project_name: "Creative Theme",
          project_image:"/images/creative.jpg",
          project_url: "/#",
          software: ["Bootstrap", "HTML", "CSS", "HUGO", "Jquery"],
          content: 'Converted theme into Hugo static structure.'
        },
        {
          project_name: "Cryption Theme",
          project_image:"/images/cryption.jpg",
          project_url: "/#",
          software: ["HTML", "CSS", "Bootstrap","Javascript"],
          content: "Crypton is a block chain based marketplace, where buyers & sellers meet to carry out operations involving digital goods & assets with crypto currency transactions.",
        },
        {
          project_name: "Crsiot Theme",
          project_image:"/images/crysiot.jpg",
          project_url: "/#",
          software: ["HTML", "CSS", "Bootstrap",  "Javascript"],
          content: 'The latest innovations and designs to help drive your business into the future and beyond.'
        },
        {
          project_name: "GymFit Theme",
          project_image:"/images/gymfit.jpg",
          project_url: "https://demo.themefisher.com/gymfit/",
          software: ["HTML", "CSS", "ootstrap", "HUGO", "Javascript"],
          content: 'Converted this theme into Hugo structure for practise.'
        },
        {
          project_name: "Mi Travel Theme",
          project_image:"/images/mitravel.jpg",
          project_url: "https://www.behance.net/gallery/76827421/MI-Travel-Free-Sketch-Template",
          software: ["HTML", "CSS", "HUGO", "Javascript"],
          content: 'Converted this Behance sketch file into html and hugo strucuture.'
        },
        {
          project_name: "Project Hotel Jante",
          project_image:"/images/hotelzante.jpg",
          project_url: "https://demo.zantetheme.com/?ref=landing",
          software: ["HTML", "CSS", "ootstrap", "HUGO", "Javascript"],
          content: 'Converted this beautiful hotel theme into hugo structure for practise.'
        },
        {
          project_name: "Reflection Democracy",
          project_image:"/images/reflection.jpg",
          project_url: "/",
          software: ["HTML", "CSS", "HUGO",],
          content: 'A unique Exhibition of Portraits and voices'
        },
      ]
    },

  ]

  return (
    <div className="col-lg-10 col-md-9 portfolio-wrapper">
      <div className='page-container' >
        <Breadcrumb></Breadcrumb>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="business-tab" data-bs-toggle="tab" data-bs-target="#business" type="button" role="tab" aria-controls="business" aria-selected="true">Business</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="e-learning-tab" data-bs-toggle="tab" data-bs-target="#e-learning" type="button" role="tab" aria-controls="e-learning" aria-selected="false">E-Learning</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="hugo-templates-tab" data-bs-toggle="tab" data-bs-target="#hugo-templates" type="button" role="tab" aria-controls="hugo-templates" aria-selected="false">Hugo-Templates</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="psd-tab" data-bs-toggle="tab" data-bs-target="#psd" type="button" role="tab" aria-controls="psd" aria-selected="false">PSD To Websites</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="react-tab" data-bs-toggle="tab" data-bs-target="#react" type="button" role="tab" aria-controls="react" aria-selected="false">React Projects</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {portfolioItems.map((data,index) => {
            return (
              <div key={index} className={`tab-pane  fade  ${data.display}  ${data.current}`} id={data.tab} role="tabpanel" aria-labelledby={`${data.tab}-tab'`}>
                <div className='row'>
                  {data.businessItems.map((Item, index) => {
                    return (
                      <div className='col-lg-4 col-md-12 mt-4' key={index}>
                        <div className="card rounded">
                          <a href={Item.project_url} target="_blank" rel="noopener noreferrer">
                            <img src={Item.project_image} className="card-img-top" alt="portfolio-1" />
                          </a>

                          <div className="card-body">
                            <h5 className="card-title">{Item.project_name}</h5>

                            <p className="card-text">{Item.content}</p>
                            <h6 className='card-subtitle mb-3'>Technology</h6>
                            <div className=''>
                              {Item.software.map((subdata,i) =>
                                <span className="subtitle  text-muted" key={i}>{subdata}</span>
                              )}

                            </div>

                            <a href={Item.project_url} className="card-link" target="_blank" rel="noopener noreferrer">Read More</a>

                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

        </div>



      </div>

    </div>
  )
}
