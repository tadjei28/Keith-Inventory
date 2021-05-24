import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import InputField from '../../components/inputfield/inputfield'
import Button from '../../components/Buttons/buttons'
import './signup.css'
import Image from './businesswoman-woman.svg'

function Signup() {

    const history = useHistory();
    const [values, setValues] = useState({})

    const onType = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    }

    const goToDash =(e)=>{
        e.preventDefault();
        history.push ("/dashboard") 

        

        fetch('http://localhost:5000/api/v1/signup', 
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
        })
    }

    const goToLogin =(e)=>{
        e.preventDefault();
        history.push ("/login")

       
    }


    return (
        <div className = 'signup'>



            
        <div className ='label' style={{backgroundColor:'lightblue', color:'blue' , width :400 , height: 640 , justifyContent: 'center'}}>
            <div className="avatar">
                <img src = {Image} alt = "image" />
            </div>
            
            
            <h1>Sign Up</h1>
            



            <div>
            <InputField type="text" label="Company Name" name="companyName" placeholder="eg; ABC COMPANY LTD." onchange={onType}/>
            <InputField type="text" label=" Username" name="username" placeholder="eg; Thelma"  onchange={onType}/>
            <InputField type="email" label=" Email" name="email" placeholder="eg; themmy@mail.com"  onchange={onType}/>
            <InputField type="pasword" label="Password" name="password" placeholder=" "  onchange={onType}/>
            <InputField type="pasword" label="Confirm Password" name="ConfirmPassword" placeholder=" "  onchange={onType}/>
            </div>

            <Button text = 'Submit' classname='btn' onclick={goToDash}/>
            <h6>Already have an account?</h6>
            
            <Button text = 'Login' classname='btn'  onclick={goToLogin}/>

        </div>
        </div>
    )
}

export default Signup
