// REMEMBER TO GET break_eternity.js WORKING 
var layer2 = {
    tableAmount: 0,
    tablesForaged: 0,
    moneyAmount: 0,
};
var bt = document.getElementById(bt);
var lastTab = 1;
var incrementComplete = true;
// unhide this layer
document.querySelector('#layer2Wrapper').className = "";
// declare elements
var moneyAmountText = document.querySelector("#moneyAmountText");
var tableAmountText = document.querySelector("#tableAmountText");
var bt = document.querySelector("button");
var resourcesHolder = document.querySelector("#resourcesHolder");
// change element css
bt.style.display = "";
bt.outerHTML = '<button id="bt", class="actionButton" onclick="layer2ClickFunction()">Forage for another table</button>';
moneyAmountText.textContent = "You have " + layer2.moneyAmount + " dollars";
tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";

function layer2ClickFunction() {
    if (Math.random() > 2 ** (layer2.tablesForaged / 10) - 1) {
        layer2.tableAmount += 1;
        layer2.tablesForaged += 1;
    } else {
        // Add an actual message
        console.log("You couldn't find any tables...");
    }
    tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
    return;
}

function tabLoad(t) {
    document.querySelector(".tab" + `${lastTab}`).classList.add("hidden");
    document.querySelector(".tab" + `${t}`).classList.remove("hidden");
    return lastTab = t;
}

function sell(what) {
    if (layer2.tableAmount >= 1 && what == "table" && incrementComplete == true) {
        layer2.tableAmount -= 1;
        tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
        incrementComplete = false;
        increment(0, "table");
    }

}

function increment(t, what) {
    if (what == "table" && t < 100) {
        t++;
        document.getElementById("sellTableFill").style.width = t + "%";
        let incrementTimer = setTimeout(increment, 10, t, 'table');
    } else if (t == 100) {
        document.getElementById("sellTableFill").style.width = 0 + "%";
        layer2.moneyAmount += 1;
        moneyAmountText.textContent = "You have " + layer2.moneyAmount + " dollars";
        incrementComplete = true;
    }
    return;
}