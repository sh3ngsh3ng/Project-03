import jwt_decode from "../../node_modules/jwt-decode"


export const sendJwt = () => {
        return {
        "headers": {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
}

export const getUserId = () => {
    let accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        let userDetails = jwt_decode(accessToken)
        return userDetails.id
    } else {
        return ""
    }
}

export const checkIfLogin = () => {
    let accessToken = localStorage.getItem("accessToken")
    console.log("called")
    console.log(accessToken)
    if (accessToken) {
        return true
    } else {
        return false
    }

}
