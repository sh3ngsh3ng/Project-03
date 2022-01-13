import axios from "axios"
import { React, useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import { userLogo } from "../images"
import FlashMessage from "react-flash-message"
import { motion } from "framer-motion/dist/es"

export default function LoginPage() {

    let history = useHistory()

    const [form, setForm] = useState({
        'username': "",
        'password': ""
    })

    const [loginErrorMessage, setLoginErrorMessage] = useState(false)


    useEffect(() => {
        setTimeout(function() {
            setLoginErrorMessage(false)
        }, 5000)
    }, [loginErrorMessage])

    const onUpdateFormField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //simple client check for empty field
    const simpleClientValidation = (obj) => {
        console.log(obj)
        for (let i in obj) {
            if (obj[i] == "") {
                return false
            } 
        } 
        return true
    }

    const flashMessageLoginError = () => {
        if (loginErrorMessage) {
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
                            <span class="alert-notif-text">{` `} Login Error</span>
                        </div>
                    </motion.div>
                </FlashMessage>
            )
        } else {
            return null
        }
    }

    const submitForm = async(obj) => {
        let check = simpleClientValidation(obj)
        console.log(check)
        if (check) {
            let result = await axios.post("https://3000-amber-guppy-qbo1ebq4.ws-us27.gitpod.io/api/user/login", {
                ...obj
            })
            
            if (result.data.message == "success") {
                localStorage.setItem("accessToken", result.data.accessToken)
                history.push("/")
            }

            if (result.data.message == "failed") {
                setLoginErrorMessage(true)
            }

        } else {
            setLoginErrorMessage(true)
            history.push("/login")
        }
    }


    return (
        <div id="login-form-div">
            {flashMessageLoginError()}
            <div id="login-form">
            <div id="login-form-brand-logo-div">
                <img class="form-brand-logo" src={userLogo}/>
            </div>
            <div id="login-username-div">
                <input id="userIdInput" placeholder="Enter Username" name="username" className="form-control" value={form.username} onChange={onUpdateFormField} />
            </div>
            <div id="login-password-div">
                <input id="passwordInput" type="password" placeholder="Password" name="password" className="form-control" value={form.password} onChange={onUpdateFormField} />
            </div>

            <div id="login-btn-div">
                <btn id="login-btn" className="btn btn-success" onClick={() => submitForm(form)}>Login</btn>
                
            </div>
            <div id="sign-up-prompt-div">
                <span id="sign-up-prompt">Don't have an account?</span>
            </div>
            
            <div id="sign-up-btn-div">
                <btn id="sign-up-btn"className="btn btn-secondary" onClick={() => history.push("/sign-up")}>Sign Up</btn>
            </div>
            </div>
        </div>
    )
}