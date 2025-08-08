const red = document.getElementById("redBox")
const blue = document.getElementById("blueBox")
const green = document.getElementById("greenBox")
const yellow = document.getElementById("yellowBox")
const greetButton = document.getElementById("greetButton")
const greeting = document.getElementById("greeting")
const greetInput = document.getElementById("greet-input")

red.onclick =  function(){
    red.style.backgroundColor = "red"
    red.style.color = "white"
}

blue.onclick = function(){
    blue.style.backgroundColor = "blue"
    blue.style.color = "white"
}

green.onclick = function(){
    green.style.backgroundColor = "green"
    green.style.color = "white"
}

yellow.onclick = function(){
    yellow.style.backgroundColor = "yellow"
}

greetButton.onclick = function(){
    greeting.innerHTML = `Hello, ${greetInput.value}`
}
