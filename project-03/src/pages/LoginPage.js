import axios from "axios"
import { React, useState} from "react"
import {useHistory} from "react-router-dom"


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
                history.push("/cart")
            }
            // let result2 = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/user/test", {
            //     "headers": {
            //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            //     }
            // })
            // console.log(result2)

        } else {
            history.push("/sign-up")
            return null // give failed notification
        }
    }


    return (
        <div>
            <div>
                <div id="login-form">
                    <h1>LoginForm</h1>
                    <div>
                        <label for="userIdInput"> Enter Username: </label>
                        <input id="userIdInput" name="username" className="form-control" value={form.username} onChange={onUpdateFormField} />
                    </div>
                    <div>
                        <label for="passwordInput"> Enter Password: </label>
                        <input id="passwordInput" type="password" name="password" className="form-control" value={form.password} onChange={onUpdateFormField} />
                    </div>
                </div>
            </div>
            <div>
                <btn className="btn btn-success" onClick={() => submitForm(form)}>Submit</btn>
            </div>
        </div>
    )
}