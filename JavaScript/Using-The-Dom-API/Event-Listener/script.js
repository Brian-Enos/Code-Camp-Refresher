
let createButton = document.getElementById("createButton");

createButton.addEventListener("click", function() {
  let newDiv = document.createElement("div");
  newDiv.textContent = "Newly Created Div Element" ;
  document.body.appendChild(newDiv);
});