import React, { Component } from "react";
import gatitoImage from '../../assets/gatito.jpeg'
import '../../components/headers/style.css'
class AppHeader extends Component {

    render(){
        return(
            <div className="header">
                <img className="icon" src={gatitoImage}></img>
                <p>React JS</p>
            </div>
        )
    }
}

export default AppHeader;