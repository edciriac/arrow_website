const links = document.getElementsByClassName("arrow-nav")
let index = 0
var expanded = false


// Hide cursor on the first time on page
if (sessionStorage.getItem("cursor") == null) {
  document.body.style.cursor = "none";
  sessionStorage.setItem("cursor", false)
  document.getElementById("main").style.pointerEvents = "none"
} else if (sessionStorage.getItem("cursor") == "true") {
  document.body.style.cursor = "auto";
  document.getElementById("main").style.pointerEvents = "auto"
  window.addEventListener("load", ()=>{ document.activeElement.blur()})
} else {
  document.body.style.cursor = "none";
  document.getElementById("main").style.pointerEvents = "none"
}

document.addEventListener("click", function (event) {
  // let clickedElement = event.target
  // if (clickedElement.classList.contains("arrow-nav")) {
  //   index = Array.from(links).indexOf(clickedElement)
  //   links[index].focus()
  // }
  handleExpand()
})

function handleExpand() {
  let focusedDiv = document.querySelector(":focus")
  let content = focusedDiv.firstElementChild
  if (!content) {
    return
  }
  let peekInfo = focusedDiv.lastElementChild
  if (focusedDiv.classList.contains("expanded")) {
    focusedDiv.classList.remove("expanded")
    content.classList.add("hide")
    peekInfo.setAttribute("class", "peek-info")
    expanded = false
  }
  else {
    focusedDiv.classList.add("expanded")
    content.classList.remove("hide")
    peekInfo.classList.add("hide")
    expanded = true
  }
}

document.addEventListener('keydown', function (event) {
  // Code for using up and down arrow keys to navigate through the links
  if (!expanded) {
    // Use stored index if on the main page
    let lastOfPath = window.location.pathname.split("/").pop()
    if (lastOfPath === "index.html" || lastOfPath === "") {
      if (sessionStorage.getItem("focusedIndex") === null) {
        index = 0
        sessionStorage.setItem("focusedIndex", index)
      } else {
        index = parseInt(sessionStorage.getItem("focusedIndex"))
      }
    }
    if (event.key === 'ArrowUp') {
      index = index == 0 ? links.length - 1 : index - 1
      links[index].focus()
      isPressed = true
    } else if (event.key === 'ArrowDown') {
      index = index == links.length - 1 ? 0 : index + 1
      links[index].focus()
      isPressed = true
    }
    // Save the focused index in the main page in session storage
    if (lastOfPath === "index.html" || lastOfPath === "") {
      sessionStorage.setItem("focusedIndex", index)
    }
    // Place focused element on the center of the scroll
    let focusedElement = document.activeElement;
    focusedElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  // Code for handling the expanded info box
  if (event.key === 'Enter') {
    let focusedDiv = document.querySelector(":focus")
    let content = focusedDiv.firstElementChild
    let peekInfo = focusedDiv.lastElementChild
    if (focusedDiv.classList.contains("expanded")) {
      focusedDiv.classList.remove("expanded")
      content.classList.add("hide")
      peekInfo.setAttribute("class", "peek-info")
      expanded = false
    }
    else {
      focusedDiv.classList.add("expanded")
      content.classList.remove("hide")
      peekInfo.classList.add("hide")
      expanded = true
    }
  }
  else if (event.key === 'Escape') {
    let focusedDiv = document.querySelector(":focus")
    if (focusedDiv.classList.contains("expanded")) {
      let content = focusedDiv.firstElementChild
      let peekContent = focusedDiv.lastElementChild
      focusedDiv.classList.remove("expanded")
      content.setAttribute("class", "hide")
      peekContent.setAttribute("class", "peek-content")
      expanded = false
    }
  }

  // Code for going back to previous page with backspace
  if (event.key === 'Backspace' || event.key === 'ArrowLeft') {
    window.history.back();
  }

  // Code for toggling the cursor
  if (event.key === 'c' || event.key === 'C') {
    
    let cursorStyle = document.getElementsByTagName("body")[0].style.cursor
    let pointerEvents = document.getElementById("main").style.pointerEvents
    if (!sessionStorage.getItem("cursor")) {
      sessionStorage.setItem("cursor", false)
    }
    if (sessionStorage.getItem("cursor") == "false") {
      document.activeElement.blur()
      document.getElementsByTagName("body")[0].style.cursor = "auto"
      document.getElementById("main").style.pointerEvents = "auto"
      for (let i = 0; i < links.length; i++) {
        links[i].style.cursor = "auto"
        if (document.getElementsByTagName("a")[i]) {
          document.getElementsByTagName("a")[i].style.cursor = "pointer"
        }
      }
      sessionStorage.setItem("cursor", true)
    } else {
      links[parseInt(sessionStorage.getItem("focusedIndex"))].focus()
      document.getElementsByTagName("body")[0].style.cursor = "none"
      document.getElementById("main").style.pointerEvents = "none"
      for (let i = 0; i < links.length; i++) {
        links[i].style.cursor = "none"
      }
      sessionStorage.setItem("cursor", false)
    }
  }

});




