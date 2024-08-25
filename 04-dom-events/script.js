//Uma função que é disparada após um evento acontecer

// Imagine um html com um botão que apresenta uma tag "p" ao clicar
const button = document.querySelector("button");

button.addEventListener("click", handleClick);

function handleClick() {
  // Imagine que no CSS a tag ".hide" está com "display: none"
  document.querySelector("p").classList.toggle("hide");
}
