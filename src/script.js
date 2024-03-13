function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem incoming...",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let peomForm = document.querySelector("#poem-form");
peomForm.addEventListener("submit", generatePoem);
