import Header from './Header'
import React,{ useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
function Login(props){
    let Cmp = props.comp;
    const history = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("user-info")){
            history("/register");
        }
    }, [])
    return(
        <div>
            <Cmp />
        </div>
    )
}

export default Login