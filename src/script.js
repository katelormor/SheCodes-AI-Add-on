function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let themeInput = document.querySelector("#search");
  let apiKey = "82atb6o4834371cad1102b496a40f6fb";
  let context =
    "You are a brilliant comedic poet. Please be incredibly funny. Keep the poem to 4 lines. You must display each line on a new line of HTML text.";
  let prompt = `Write me a unique and hilarious poem about ${themeInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemBox = document.querySelector("#poem");
  poemBox.innerHTML = "Poem incoming...";

  axios.get(apiUrl).then(displayPoem);
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", generatePoem);

let peomForm = document.querySelector("#poem-form");
peomForm.addEventListener("submit", generatePoem);
