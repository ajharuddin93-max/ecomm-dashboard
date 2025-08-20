import Header from './Header'
import React,{ useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("user-info")){
            history("/add");
        }
    }, [])
    async function login() {
        let item = {email,password}
        let result = await fetch("http://localhost/my-project/api/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)
        })
        let data = await result.json();
        localStorage.setItem("user-info", JSON.stringify(data));
            history("/add");
        // if (result.ok && data.success) {
        //     localStorage.setItem("user-info", JSON.stringify(data));
        //     history("/add");
        // }else{
        //     alert("Invalid Email or Password");
        // }
        

    }
    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Login</h1>
                <input type="text" placeholder="Email" className="form-control" onChange={(e) => setEmail(e.target.value)}/><br />
                <input type="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}/><br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login