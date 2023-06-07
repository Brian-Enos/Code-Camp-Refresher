
let purchaseButton = document.getElementBtId("PurchaseButton");

purchaseButton.addEventListenter("click", purchase);

console.log(purchaseButton);

function purchase() {
  console.log("Purchased!");
}