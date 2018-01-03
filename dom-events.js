const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")
const input = document.getElementById("input")
const submitEl = document.getElementById("submit")

window.onload = () => {
  greetingEl.innerText = "oh, hey there!"
  //renderAstros()
  makeListOfAstronauts()
//  window.addEventListener("click", showCoords())
  // = () =>{
  //   showCoords(event)
  // }
}

renderAstros = () => {
  const astros = peopleInSpace.people
  let peopleEls = astros.map((person) => {
    let name = person.name
    return `<li>${name}</li>`
  })
  astrosEl.innerHTML = `${peopleEls.join("")}`
}

let makeListOfAstronauts = () => {
  astronauts = peopleInSpace.people.map((person) => {
    return "<li> " + person.name + " </li>"
  })
  astroString = astronauts.join("")
  astrosEl.innerHTML = astroString

}

 // create a function that alerts "these are all the astronauts!" when the title element is clicked.
var title = document.getElementsByClassName("title") //returns an array
title[0].onclick = () => {
  alert("these are all the astronauts")
  showCoords()
}


 // log to the console the client's x coordinate of their mouse as they move it around the window.

// window.addEventListener("click", showCoords())
window.onmousemove = () =>{
  showCoords()
}

// window.addEventListener("mouseover", showCoords)

var showCoords = () => {
//  console.log("hello")
  var x = event.clientX;
  //var coords = "X coord: " + x
  console.log("X coord: " + x);
}


// make an element that displays the most recent key pressed in the DOM

window.onkeyup = () => {
  var key = window.event.keyCode
  var chr = String.fromCharCode(key)
  console.log(chr)
}

// create a text input element. When a user clicks on the text field to input, log the input element to console.


var flag = false
// when a user clicks away from the input, log ("bye") to the console.
window.onclick = () => {
  if(event.target.id == "input"){
    console.log(input)
    flag = true
  }
  // input.onclick = () => {
  //   console.log(input)
  // }
  else if(flag == true){
      console.log("bye")
      flag = false
  }
}


// wrap the input element with a form element.

// when the form is submitted, render the client's inputted text to the DOM
submitEl.onclick = () => {
  console.log(input.value)
}
// HINT: look into event.preventDefault()
