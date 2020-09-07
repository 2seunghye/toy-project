const form = document.querySelector(".js-form")
    input = form.querySelector("input")
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser";
    SHOWING_CN = "showing" //추가

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    userGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
    
function userGreeting(text){
    form.classList.remove(SHOWING_CN); //추가
    greeting.classList.add(SHOWING_CN); //추가
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //유저가 없을 때 할 행동
        askForName();
    } else {
        //유저가 있을 때 할 행동
        userGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();