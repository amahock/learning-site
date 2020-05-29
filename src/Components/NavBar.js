import React from "react";
import logoImage from "../Images/logo1.png";
import {routes} from "../Routes/routes";

const NavBar = () =>{
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <div className="nav-logo align-content-start">
              <a className="navbar-brand" href={routes.home}>
                <img className="img-fluid" src={logoImage} alt="Logo" style={{width:"50px",align:"left"}}/>
              </a>
            </div>
            <div className="nav-heading text-white">
                {/* <p className="font-weight-bolder display-4"><small>Learning Site</small></p> */}
                <h4>InaVir Technologies</h4>
            </div>
            
            <div className="nav-links align-items-end">
                <div>
                <a className="btn btn-outline-primary" href={routes.home} role="button">Login/SignUp</a> 
                </div>
            </div>
        </div>
      </nav>
    )
}

export default NavBar;