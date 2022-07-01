import React from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'
const Navbar = (props) => {
    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Online-textutils</Link>
                        {/* <Link className="navbar-brand" to="/">{props.navprop.title}</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse li-items" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link " aria-current="page" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link " aria-current="page" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="d-flex ms-auto">

                                {/* <button className="btn btn-outline-success" onClick={navprop.toggleMode} >{navprop.btnText}</button> */}
                                {/* <button className="btn btn-outline-success" onClick={props.navprop.toggleMode} >{props.navprop.btnText}</button> */}

                                <div className={`form-check form-switch text-${props.mode==="light"?"dark": "light"}`}>
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==="light"?"dark": "light"} mode`}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired

}

Navbar.defaultProps = {
    title: "This is my title"
}


export default Navbar


