function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("light")) {
    //se tiver light mode add imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se tiver sem light manter imagem preta.
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
