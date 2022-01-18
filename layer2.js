// REMEMBER TO GET break_eternity.js WORKING 
var layer2 = {
    tableAmount: 0
};
var tableAmountText = document.createElement("div");
var bt = document.querySelector("button")
bt.style.display = "";
bt.outerHTML = '<button id="bt", class="actionButton" onclick="layer2ClickFunction()">Get another table</button>';
tableAmountText.className = "changingText";
tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
document.body.appendChild(tableAmountText);

function layer2ClickFunction(){
    layer2.tableAmount += 1;
    tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
    return;

}