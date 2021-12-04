import React from "react"
import {useLocation} from "react-router-dom"
import ScriptTag from 'react-script-tag'

export default function CheckoutPage() {

    const location = useLocation()

    console.log(location.state.sessionId)

    return (
        <ScriptTag type="text/javascript" src="./script/script.js"/>
    )


}