import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Breadcrumb() {
  function capitalName(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  const url = window.location.href.split('/')
  return (
    <>
      <div className="page-title-container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="page-title">Rupa Odedara</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-container d-inline-block">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">{capitalName(url[3])}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
