console.log("we made it to the javascript file!!! hooray! ")

const dropdown = document.getElementById("pokemon-select");
const button = document.getElementById("show-button");
const output = document.getElementById("pokemon-output");

button.addEventListener("click", () => {
  const selectedPokemon = dropdown.value;
  output.textContent = `You chose: ${selectedPokemon}!`;
});
