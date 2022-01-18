// REMEMBER TO GET break_eternity.js WORKING 
var layer2 = {
    tableAmount: 0
};
// declare elements
var tableAmountText = document.createElement("div");
var bt = document.querySelector("button");
var resourcesHolder = document.createElement("div");
// change element css
resourcesHolder.className = "genericContainer";
resourcesHolder.textContent = "Resources:";
bt.style.display = "";
bt.outerHTML = '<button id="bt", class="actionButton" onclick="layer2ClickFunction()">Get another table</button>';
tableAmountText.className = "changingText";
tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
// append elements
document.body.appendChild(tableAmountText);
document.body.appendChild(resourcesHolder);

function layer2ClickFunction() {
    layer2.tableAmount += 1;
    tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
    return;

}