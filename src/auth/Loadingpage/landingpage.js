import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../../components/Buttons/buttons'
import './landingpage.css'

function Landingpage() {

    const history = useHistory()

    const goToLogin =()=>{
        history.push ('./login')
    }

    const goToSignUp =()=>{
        history.push ('./signup')
    }


    return (
        <div className='landing'>
            
            <Button text = 'Login' classname='btn-primary' onclick={goToLogin}/>
            <Button text = 'Sign up' classname='btn-primary'  onclick={goToSignUp}/>
            
        </div>
    )
}

export default Landingpage
