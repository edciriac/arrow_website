
// Show tooltip if user doesn't press on arrow keys for 4 seconds
let isPressed = false
const showHelp = () => {
    if (!isPressed) {
        document.getElementsByClassName("help")[0].style.animation = "show 5s"
    }
}
setInterval(showHelp, 3000);

// Code for using up and down arrow keys to navigate through the links
const links = document.getElementsByClassName("arrow-nav")
let index = 0 
var expanded = false
document.addEventListener('keydown', function(event) {
  if (!expanded) {
    if (event.key === 'ArrowUp') {
      index = index== 0? links.length-1: index-1
      links[index].focus() 
      isPressed = true
    } else if (event.key === 'ArrowDown') {
      index = index== links.length-1? 0: index+1
      links[index].focus()  
      console.log('Down arrow key pressed');
      isPressed = true
    }
  }

  // Code for handling the expanded info box
  if (event.key === 'Enter') {
    let focusedDiv = document.querySelector(":focus")
    let content = focusedDiv.firstElementChild
    let peekContent = focusedDiv.lastElementChild
    if (focusedDiv.classList.contains("expanded")) {
      focusedDiv.classList.remove("expanded")
      content.setAttribute("class", "hide")
      peekContent.setAttribute("class", "peek-content")
      expanded = false
    }
    else {
      focusedDiv.classList.add("expanded")
      content.classList.remove("hide")
      peekContent.classList.add("hide")
      expanded = true
    } 
  } 
  // else if (event.key === 'Escape') {
    
  // }

  // Code for toggling the cursor
  if (event.key === 'c' || event.key === 'C') {
    console.log('c key pressed');
    let cursorStyle = document.getElementsByTagName("body")[0].style.cursor
    if (cursorStyle === "none") {
      document.getElementsByTagName("body")[0].style.cursor = "default"
      for (let i = 0; i < links.length; i++) {
        links[i].style.cursor = "default"
      }
      
    } else {
      document.getElementsByTagName("body")[0].style.cursor = "none"
      for (let i = 0; i < links.length; i++) {
        links[i].style.cursor = "none"
      }
    }
  }

});




