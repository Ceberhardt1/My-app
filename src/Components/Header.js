import React from "react";

function Header(props){
    return(
        <div className="header">
            <h1>{props.headingnames}</h1>
        </div>
    );
}
export default Header;