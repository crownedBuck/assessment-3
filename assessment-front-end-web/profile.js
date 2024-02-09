// alert("hello world!") // it's working & connected


const buttonClickForFun = () => {
    alert("Laura is now having fun")
}

const buttonClickMyFavColor = () => {
    alert("Laura's favorite colors are shades between green and blue. Laura has a hard time picking an exact color to be her favorite.")
}

const buttonClickMyFavPlace = () => {
    alert("Laura's favorite place is up north at the lake.")
}

const buttonClickMyFavRitual = () => {
    alert("Having homemade New England clam chowder soup for Christmas Eve.")
}

const forFun = document.querySelector("#fun")
const favColor = document.querySelector("#color")
const favPlace = document.querySelector("#place")
const favRitual = document.querySelector("#ritual")

forFun.addEventListener('click', buttonClickForFun)
favColor.addEventListener('click', buttonClickMyFavColor)
favPlace.addEventListener('click', buttonClickMyFavPlace)
favRitual.addEventListener('click', buttonClickMyFavRitual)