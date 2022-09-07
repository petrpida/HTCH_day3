const username = document.getElementById("username")
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const email = document.getElementById("email")
const date = document.getElementById("date")
const register = document.getElementById("register")
const users = document.getElementById("users")

const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')
const matchError = document.getElementById('matchError')
const emailError = document.getElementById('emailError')

const empty = document.getElementById("empty")

let error = false


let userInfo = {
    username: "",
    password1: "",
    password2: "",
    email: "",
    date: ""
}

let userList = []

username.addEventListener("input", (e) => {
    userInfo.username = e.target.value
})

password1.addEventListener("input", (e) => {
    userInfo.password1 = e.target.value
})

password2.addEventListener("input", (e) => {
    userInfo.password2 = e.target.value
})

email.addEventListener("input", (e) => {
    userInfo.email = e.target.value
})

date.addEventListener("input", (e) => {
    userInfo.date = e.target.value
})

register.addEventListener("click", (e) => {
    e.preventDefault()
    if (userInfo.username.length < 4 || userInfo.username.length > 64) {
        usernameError.classList.remove("hidden")
        error = true
    } else {
        usernameError.classList.add("hidden")
        error = false
    }

    if (userInfo.password1.length < 8 || userInfo.password1.length > 64) {
        passwordError.classList.remove("hidden")
        error = true
    } else {
        passwordError.classList.add("hidden")
    }

    if (userInfo.password1 !== userInfo.password2) {
        matchError.classList.remove("hidden")
        error = true
    } else  {
        matchError.classList.add("hidden")
    }

    let pattern = /^\S+@\S+\.\S+$/
    if (!pattern.test(userInfo.email)) {
        emailError.classList.remove("hidden")
        error = true
    } else {
        emailError.classList.add("hidden")
    }


    if (!error) {
        userList.push(userInfo)
        console.log(userList)

        if (userList.length > 0) {
            empty.classList.add("hidden")
        }

        const userRecord = document.createElement("div")
        userRecord.textContent = `${userInfo.username} - ${userInfo.email} - ${userInfo.date}`
        users.appendChild(userRecord)
    }
})
