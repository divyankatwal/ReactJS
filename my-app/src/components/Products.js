import React from 'react'

export default function prodcuts() {
  return (
    <div className="container my-4">
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">ComputerChacha, <span className="text-body-secondary">class in
            itself.</span></h2>
          <p className="lead">Wide range of budget friendly computer builds at one place.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="logo.png"
            d-flex height="500px" width="500px" alt="" />
        </div>
      </div>
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-4 order-md-1">
          <h2 className="featurette-heading fw-normal lh-1">PC Builds <span className="text-body-secondary">For
            everyone.</span></h2>
          <p className="lead">Introducing new pc builds for everyone.</p>
        </div>
        <div className="col-md-5 order-md-2">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="posterinsta.jpg" d-flex height="500px" width="500px" alt="" />
        </div>
      </div>
      <div className="row featurette d-flex justify-content-center align-items-center my-4">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Trusted Owners <span className="text-body-secondary">and
            reputed ones.</span></h2>
          <p className="lead">We have collabs with big NGO's and have awards in our name.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="pcwall.jpg" d-flex height="500px" width="500px" alt="" />
        </div>
      </div>
    </div>
  )
}
