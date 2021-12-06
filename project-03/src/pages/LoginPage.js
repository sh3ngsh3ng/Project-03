import axios from "axios"
import { React, useState} from "react"
import {useHistory} from "react-router-dom"
import { getUserId } from "./utils"


export default function LoginPage() {

    let history = useHistory()

    const [form, setForm] = useState({
        'username': "",
        'password': ""
    })

    const onUpdateFormField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const simpleClientValidation = (obj) => {
        for (let i in obj) {
            if (i == "") {
                return "Please field in empty field"
            }
        }
        return true
    }

    const submitForm = async(obj) => {
        let check = simpleClientValidation(obj)
        if (check) {
            let result = await axios.post("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/user/login", {
                ...obj
            })
            
            if (result.data.message == "success") {
                localStorage.setItem("accessToken", result.data.accessToken)
                history.push("/cart/" + getUserId()) // push user id to cart
            }

        } else {
            history.push("/sign-up")
            return null // give failed notification
        }
    }


    return (
        <div id="login-form-div">
            <div id="login-form">
            <div id="login-form-brand-logo-div">
                <img class="form-brand-logo" src="../src/sherlock-holmes.png"/>
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