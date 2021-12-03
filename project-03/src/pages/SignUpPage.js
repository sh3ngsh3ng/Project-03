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
        <div>
            <div>
                <div id="sign-up-form">
                    <h1>Sign Up Form</h1>
                    <div>
                        <label for="email"> Enter Email: </label>
                        <input id="emailInput" name="email" className="form-control" value={form.email} onChange={onUpdateFormField}/>
                    </div>
                    <div>
                        <label for="userIdInput"> Enter Username: </label>
                        <input id="userIdInput" name="username" className="form-control" value={form.username} onChange={onUpdateFormField}/>
                    </div>
                    <div>
                        <label for="passwordInput"> Enter Password: </label>
                        <input id="passwordInput" type="password" name="password" className="form-control" value={form.password} onChange={onUpdateFormField}/>
                    </div>
                    <div>
                        <label for="confirmPassword"> Confirm Password: </label>
                        <input id="confirmPassword" type="password" name="confirmPassword" className="form-control" value={form.confirmPassword} onChange={onUpdateFormField}/>
                    </div>
                </div>
            </div>
            <div>
                <btn className="btn btn-success" onClick={() => submitForm(form)}>Submit</btn>
            </div>
        </div>
    )
}