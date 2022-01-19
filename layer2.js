// REMEMBER TO GET break_eternity.js WORKING 
var layer2 = {
    tableAmount: 0
};
var lastTab = ""
// declare elements
var tabContainer = document.createElement("div");
var tableAmountText = document.createElement("div");
var bt = document.querySelector("button");
var resourcesHolder = document.createElement("div");
var options = document.createElement("button");
var resources = document.createElement("button");
var stats = document.createElement("button");
// change element css
options.textContent = "options";
options.className = "tabButton"
resources.textContent = "Resources";
resources.className = "tabButton"
stats.textContent = "Stats";
stats.className = "tabButton"
tabContainer.className = "tabContainer layer2 main"
resourcesHolder.className = "genericContainer layer2 tab1";
resourcesHolder.textContent = "Resources:";
bt.style.display = "";
bt.outerHTML = '<button id="bt", class="actionButton" onclick="layer2ClickFunction()">Get another table</button>';
tableAmountText.className = "changingText main";
tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
// append elements
document.body.appendChild(tabContainer)
document.body.appendChild(tableAmountText);
document.body.appendChild(resourcesHolder);
tabContainer.appendChild(resources)
tabContainer.appendChild(options)
tabContainer.appendChild(stats)

function layer2ClickFunction() {
    layer2.tableAmount += 1;
    tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
    return;

}


