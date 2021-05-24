import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './loginpage.css'
import InputField from '../../components/inputfield/inputfield'
import Button from '../../components/Buttons/buttons'

function Login() {

    const [values , setValues] = useState({})
    const history = useHistory()

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    const goToD = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:5000/api/v1/login', 
        {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);
            
            if (responseData.message1){
              history.push("/dashboard")
          }else{
              alert(JSON.stringify(responseData))
          }

        })
    }

    const goToSign = (e) => {
        e.preventDefault();
        history.push("/signup")
    }

    return (
        <div className = 'login'>
           <div className= 'form'>
        
                 <h1>Admin Login</h1>
                 <InputField className='formdiv' type="Username" label="Username" name="username" placeholder="eg; Anita111" onchange={onChange} />
           
                 <InputField className='formdiv' type="Password" label="Password" name="password" placeholder=" " onchange={onChange}/>
           
                 <Button text = 'Login' classname='btn' onclick = {goToD}/>
                <Button text = 'Sign up' classname='btn' onclick ={goToSign}/>

                 
            </div>   
        </div>
    )
}

export default Login
