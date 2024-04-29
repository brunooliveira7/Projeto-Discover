function toggleMode() {
  //pegar no html
  const html = document.documentElement
  //troca das classes
  html.classList.toggle("light")

  //pegar a img
  const img = document.querySelector("#profile img")
  //substutuir a img
  if (html.classList.contains("light")) {
    //se mode light, add img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
