const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

window.onload = () => {
  alert("hi")
  greetingEl.innerText = "oh, hey there!"
  //renderAstros()
  makeListOfAstronauts()
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

 // log to the console the client's x coordinate of their mouse as they move it around the window.

// make an element that displays the most recent key pressed in the DOM

// create a text input element. When a user clicks on the text field to input, log the input element to console.

// when a user clicks away from the input, log ("bye") to the console.

// wrap the input element with a form element.

// when the form is submitted, render the client's inputted text to the DOM

// HINT: look into event.preventDefault()
