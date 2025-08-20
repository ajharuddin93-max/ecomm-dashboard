import React,{ useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Header from './Header'

function Register(){

    useEffect(() => {
        if(localStorage.getItem("user-info")){
            history("/add");
        }
    }, [])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function signUp() {
        let item = {name,email,password}
        let result = await fetch("http://localhost/my-project/api/register",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log(result)
        localStorage.setItem("user-info",JSON.stringify(result))
        history("/add"); 
    }

    return(
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Sign Up</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control"/><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control"/><br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control"/><br />
                <button onClick={signUp} className="btn btn-primary">Sign Up</button>
            </div>
        </>
    )
}

export default Register;