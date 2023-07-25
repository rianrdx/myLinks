function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //subistituir imagem
  const image = document.querySelector("#profile img")
  if(html.classList.contains("light")) {
    image.setAttribute('src', './assets/Avatar-light.png')
    image.setAttribute('alt', 'Foto de Rian Guedes - modo light')
  }else{
    image.setAttribute('src', './assets/Avatar.png')
    image.setAttribute('alt', 'Foto de Rian Guedes - modo Dark')
  }
}