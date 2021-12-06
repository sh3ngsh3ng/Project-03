import axios from "axios"
import {React, useState} from "react"
import {useHistory} from "react-router-dom"



export default function SignUpPage() {

    let history = useHistory()

    // form state
    const [form, setForm] = useState({
        'username': "",
        'email': "",
        'password': "",
        'confirmPassword': ""
    })

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
            if (i == "") {
                return "Please fill in empty field"
            }
        }
        if (form.password !== form.confirmPassword) {
            return "Password don't match"
        }
        return true
    }

    // validation plus post
    const submitForm = async (obj) =>{
        let check = simpleClientValidation(obj)
        if (check) {
            let newUser = await axios.post("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/user/sign-up" , {
                ...obj
            })
            history.push("/login")
        } else {
            return null // give failed notification
        }
    }


    return(
            <div id="sign-up-form-div">
                <div id="sign-up-form">
                    <div id="sign-up-form-brand-logo-div">
                        <img class="form-brand-logo" src="../src/sherlock-holmes.png"/>
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