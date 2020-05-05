import React, {useState} from 'react';
// import axios from 'axios';
import './RegistrationForm.css';
// import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

import { BsFillEnvelopeFill } from "react-icons/bs" ;
import { BsPuzzle } from "react-icons/bs" ; 
import { BsPuzzleFill } from "react-icons/bs" ; 

function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    // const sendDetailsToServer = () => {
    //     if(state.email.length && state.password.length) {
    //         props.showError(null);
    //         const payload={
    //             "email":state.email,
    //             "password":state.password,
    //         }
    //         axios.post(API_BASE_URL+'register', payload)
    //             .then(function (response) {
    //                 if(response.data.code === 200){
    //                     setState(prevState => ({
    //                         ...prevState,
    //                         'successMessage' : 'Registration successful. Redirecting to home page..'
    //                     }))
    //                     redirectToHome();
    //                     props.showError(null)
    //                 } else{
    //                     props.showError("Some error ocurred");
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });    
    //     } else {
    //         props.showError('Please enter valid username and password')    
    //     }
        
    // }
    const redirectToHome = () => {
        props.updateTitle('Menu Principal')
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.updateTitle('Inicia tu Cuenta')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            redirectToHome()
            // sendDetailsToServer()    
        } else {
            props.showError('Las claves son diferentes');
        }
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-5 hv-center">
            <form>
            <div className="text-left"><label htmlFor="exampleInputEmail1">Correo Electrónico</label></div>
                <div className="form-group text-left input-group">      
                <div className="input-group-prepend">
                <span className="input-group-text"><i><BsFillEnvelopeFill/></i></span></div>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Correo" 
                       value={state.email}
                       onChange={handleChange}
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="text-left"><label htmlFor="exampleInputPassword1">Contraseña</label></div>
                <div className="form-group text-left input-group">
                <div className="input-group-prepend">
                <span className="input-group-text"><i><BsPuzzle/></i></span></div>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Clave"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="text-left"><label htmlFor="exampleInputPassword1">Re-ingresa tu Contraseña</label></div>
                <div className="form-group text-left input-group">
                <div className="input-group-prepend">
                <span className="input-group-text"><i><BsPuzzleFill/></i></span></div>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirma"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Registrarse
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Ya tienes una cuenta? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Iniciala</span> 
            </div>
            
        </div>
    )
}

export default withRouter(RegistrationForm);