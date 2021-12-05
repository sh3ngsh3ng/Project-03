

// example of protecting route
// let result2 = await axios.get("https://3000-amber-guppy-qbo1ebq4.ws-us21.gitpod.io/api/user/test", jwtToken())
// console.log("see this", result2)


export const sendJwt = () => {
        return {
        "headers": {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
}

