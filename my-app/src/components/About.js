import React from 'react'
import logo from './logo.png'
import pcwall from './pcwall.jpg'
import posterinsta from './posterinsta.jpg'


export default function About(props) {
    return (
        <div className="container my-4">
            <div className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7 order-md-2" style={{ color: props.mode === 'dark' ? 'white' : '#03012b' }}>
                    <h2 className="featurette-heading fw-normal lh-1">ComputerChacha, class in itself.</h2>
                    <p className="lead">Wide range of budget friendly computer builds at one place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={logo}
                        d-flex height="500px" width="500px" alt="Logo" />
                </div>
            </div>
            <div className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-4 order-md-1" style={{ color: props.mode === 'dark' ? 'white' : '#03012b' }}>
                    <h2 className="featurette-heading fw-normal lh-1">PC Builds For everyone. </h2>
                    <p className="lead">Introducing new pc builds for everyone.</p>
                </div>
                <div className="col-md-5 order-md-2">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        src={posterinsta} d-flex height="500px" width="500px" alt="Posterinsta" />
                </div>
            </div>
            <div className="row featurette d-flex justify-content-center align-items-center my-4">
                <div className="col-md-7 order-md-2" style={{ color: props.mode === 'dark' ? 'white' : '#03012b' }}>
                    <h2 className="featurette-heading fw-normal lh-1">Trusted Owners and reputed ones.</h2>
                    <p className="lead">We have collabs with big NGO's and have awards in our name.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        src={pcwall} d-flex height="500px" width="500px" alt="Pcwall" />
                </div>
            </div>
        </div>
    )
}
