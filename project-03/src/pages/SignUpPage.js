import axios from "axios"
import {React, useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import { userLogo } from "../images"
import { motion } from "framer-motion/dist/es"
import FlashMessage from "react-flash-message"


export default function SignUpPage() {

    let history = useHistory()

    // form state
    const [form, setForm] = useState({
        'username': "",
        'email': "",
        'password': "",
        'confirmPassword': ""
    })

    // sign up failed
    const [signUpErrorMessage, setSignUpErrorMessage] = useState(false)

    // sign up failed flash message
    const flashMessageSignUpError = () => {
        if (signUpErrorMessage) {
            return (
                <FlashMessage duration={4000}>
                    <motion.div
                        className="alert-notif-div alert alert-danger"
                        style={{position:"absolute"}}
                        role="alert"
                        animate={{ y: 0 }}
                        initial={{ y: "-100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            delay: 0.02
                        }}
                    >
                        <div class="alert-notif-content">
                            <i class="bi bi-exclamation-circle"></i>
                            <span class="alert-notif-text">{` `} Sign Up Failed</span>
                        </div>
                    </motion.div>
                </FlashMessage>
            )
        } else {
            return null
        }
    }

    // reset signUpErrorMessage state
    useEffect(() => {
        setTimeout(function() {
            setSignUpErrorMessage(false)
        }, 5000)
    }, [signUpErrorMessage])

    // form two way binding
    const onUpdateFormField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // check for no empty field
    const simpleClientValidation = (obj) => {
        for (let i in obj) {
            if (obj[i] == "") {
                return false
            }
        }
        if (form.password !== form.confirmPassword) {
            return false
        }
        return true
    }

    // validation plus post
    const submitForm = async (obj) =>{
        let check = simpleClientValidation(obj)
        if (check) {
            let result = await axios.post("https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/user/sign-up" , {
                ...obj
            })

            if (result.data.message == "success") {
                history.push("/login")
            }
        } else {
            setSignUpErrorMessage(true) // give failed notification
        }
    }


    return(
            <div id="sign-up-form-div">
                {flashMessageSignUpError()}
                <div id="sign-up-form">
                    <div id="sign-up-form-brand-logo-div">
                        <img class="form-brand-logo" src={userLogo}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="userIdInput" name="username" placeholder="Enter Username"className="form-control" value={form.username} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="passwordInput" type="password" placeholder="Password" name="password" className="form-control" value={form.password} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword" className="form-control" value={form.confirmPassword} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="emailInput" name="email" placeholder="Enter Email"className="form-control" value={form.email} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <btn id="sign-up-submit-btn" className="btn btn-success" onClick={() => submitForm(form)}>Submit</btn>
                    </div>
                    <div id="login-prompt-div">
                        <i class="bi bi-arrow-left-circle" onClick={() => history.push("/login")}></i>
                        <span id="login-prompt">Back to Login</span>
                    </div>
                </div>
            </div>
    )
}