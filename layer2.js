// REMEMBER TO GET break_eternity.js WORKING 
var layer2 = {
    tableAmount: 0
};
var lastTab = 1;
// unhide this layer
document.querySelector('#layer2Wrapper').className = "";
// declare elements
var tableAmountText = document.querySelector("#tableAmountText");
var bt = document.querySelector("button");
var resourcesHolder = document.querySelector("#resourcesHolder");
// change element css
bt.style.display = "";
bt.outerHTML = '<button id="bt", class="actionButton" onclick="layer2ClickFunction()">Get another table</button>';
tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";

function layer2ClickFunction() {
    layer2.tableAmount += 1;
    tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
    return;

}

function tabLoad(t) {
    document.querySelector(".tab" + `${lastTab}`).classList.add("hidden");
    document.querySelector(".tab" + `${t}`).classList.remove("hidden");
    return lastTab = t;
}

