
let craeteButton = document.getElementById("createButton");

craeteButton.addEventListener("click", function() {
  let newDiv = document.createElement("div");
  newDiv.textContent = "Newly Created Div Element" ;
  document.body.appendChild(newDiv);
})