import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    let palete="light";

      if(props.mode==="neon" || props.mode==="dark"){
        palete="dark";
      }

    const myStyle={
        color:props.mode==="dark"?"white":(props.mode==="light"?"black":"crimson")
    }
    return (
        <div>

            <nav className={`navbar navbar-expand-lg  navbar-${palete} bg-${palete}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={myStyle}>
                        {props.title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={myStyle}>
                                    {props.home}
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/" style={myStyle}>
                                    {props.aboutText}
                                </a>
                            </li> */}
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':(props.mode==="dark"?'light':'red')}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':(props.mode==="dark"?'light':'crimson')}`}>
                            <input className="form-check-input" onClick={props.neonMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable neon Mode</label>
                        </div> */}

                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
    home: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here",
    about: "set about here"
}