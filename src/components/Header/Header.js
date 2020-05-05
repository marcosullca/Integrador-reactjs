
import React from 'react';
import './Header.css';
import { withRouter } from "react-router-dom";

function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.slice(0).toUpperCase()
        // return s.charAt(0) + s.slice(1).toUpperCase()
    }
    const title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    return(
        <nav className="navbar navbar-expand-md navbar-dark" id="nav_head">
            <h4 id="title_head">CovidTEC</h4>
            <div className="row col-11 d-flex justify-content-center text-white">
                <span className="h3" id="titulo">{props.title || title}</span>
            </div> 
        </nav>
    )
}
export default withRouter(Header);