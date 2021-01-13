import React from 'react'

const NavClassic = () => {
  return (
    <div className="position-relative bg-white text-center z-index-2">
      <ul className="nav nav-classic nav-tab justify-content-center" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active " id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="true">
            <div className="d-md-flex justify-content-md-center align-items-md-center">
              Featured
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " id="pills-two-example1-tab" data-toggle="pill" href="#pills-two-example1" role="tab" aria-controls="pills-two-example1" aria-selected="false">
            <div className="d-md-flex justify-content-md-center align-items-md-center">
              On Sale
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="false">
            <div className="d-md-flex justify-content-md-center align-items-md-center">
              Top Rated
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}


export default NavClassic
