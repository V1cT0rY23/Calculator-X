
const input = document.getElementById("disp");

const display= (val) => {
  input.value += val ;

}

const reset = () => {
    input.value="";
}

const execute = () => {
    input.value=eval(input.value);
    console.log(input.value)


}
const del = () => {
    input.value=input.value.substr(0,input.value.length-1);
}

const htmlElem = document.querySelector("html")
const themeButton = document.getElementById("theme-toggle")

initTheme()

function initTheme() {
     const currentTheme = localStorage.getItem("theme") ??
     "dark"

     htmlElem.classList.add(currentTheme)
}

function setTheme() {
    const currentTheme = localStorage.getItem("theme") ??
    "dark"
    const newTheme = 
       currentTheme === "dark"
    ? "light"
    : "dark"

    htmlElem.classList.replace(
        currentTheme,
        newTheme
    )
    localStorage.setItem("theme", newTheme)
}

themeButton.addEventListener("click", 
    () => {
        setTheme()
    })

