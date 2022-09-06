const username = document.getElementById("username")
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const email = document.getElementById("email")
const date = document.getElementById("date")
const register = document.getElementById("register")
const users = document.getElementById("users")

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
    console.log(userInfo)
    userList.push(userInfo)
    console.log(userList)
    users.textContent = `${userInfo.username} - ${userInfo.email} - ${userInfo.date}`
})

