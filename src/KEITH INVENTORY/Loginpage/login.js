import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './loginpage.css'
import InputField from '../../COMPONENTS/INPUTFIELD/inputfield'
import Button from '../../COMPONENTS/Buttons/buttons'

function Login() {

    const [values , setValues] = useState({})
    const history = useHistory()

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    const goToD = (e) => {
        e.preventDefault();
        history.push("/dashboard")
    }

    const goToSign = (e) => {
        e.preventDefault();
        history.push("/signup")
    }

    return (
        <div className = 'login'>
           <div className= 'form'>
        
                 <h1>Admin Login</h1>
                 <InputField className='formdiv' type="UserId" label="User ID" name="userid" placeholder="eg; Anita111" onchange={onChange} />
           
                 <InputField className='formdiv' type="Password" label="Password" name="password" placeholder=" " onchange={onChange}/>
           
                 <Button text = 'Login' classname='btn' onclick = {goToD}/>
                <Button text = 'Sign up' classname='btn' onclick ={goToSign}/>

                 
            </div>   
        </div>
    )
}

export default Login
