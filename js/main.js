function switchLigth() {
  var button = document.querySelector('button')
  var h1 = document.querySelector('h1')
  var body = document.querySelector('body')

  if (button.classList.value === "switch on"){
    h1.innerText = "Hey, who turned off the lights?"
    body.style.backgroundColor = "black"
    button.className = "switch off"
  }else{
    h1.innerText = "It's so bright in here!"
    body.style.backgroundColor = "yellow"
    button.className = "switch on"
  }
}

var button = document.querySelector('button');
button.addEventListener('click', switchLigth);
