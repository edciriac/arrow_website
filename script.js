
// Show tooltip if user doesn't press on arrow keys for 4 seconds
let isPressed = false
const showHelp = () => {
    if (!isPressed) {
        document.getElementsByClassName("help")[0].style.animation = "show 5s"
    }
}
setInterval(showHelp, 3000);

// Code for using up and down arrow keys to navigate through the links
const links = document.getElementsByTagName('a').length != 0 ? document.getElementsByTagName('a') : document.getElementsByClassName("infobox")
let index = 0
document.addEventListener('keydown', function(event) {
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

  // Code for toggling the cursor
  if (event.key === 'c') {
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


