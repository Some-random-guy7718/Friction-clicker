// REMEMBER TO GET break_eternity.js WORKING 
var layer2 = {
    tableAmount: 0,
    tablesForaged: 0,
    moneyAmount: 0,
    morbAmount: 0,
    activeMorbs: 0,
};
const time = parseInt(Date.now())
var bt = document.getElementById(bt);
var lastTab = 1;
var incrementTableComplete = true;
var incrementMorbComplete = true;
var xAmount = 1;
var morbed = false;
var effectHappening = 0;
// unhide this layer
document.querySelector('#layer2Wrapper').className = "";
// declare elements
var moneyAmountText = document.querySelector("#moneyAmountText");
var tableAmountText = document.querySelector("#tableAmountText");
var morbAmountText = document.querySelector("#morbAmountText");
var bt = document.querySelector("button");
var resourcesHolder = document.querySelector("#resourcesHolder");
var statList = document.querySelector("#statList")
var morbButton = document.querySelector("#morbUse")
// change element css
bt.style.display = "";
bt.outerHTML = '<button id="bt", class="actionButton" onclick="layer2ClickFunction()">Forage for another table</button>';
moneyAmountText.textContent = "You have " + layer2.moneyAmount + " dollars";
tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
morbAmountText.textContent = "You have " + layer2.morbAmount + " Morbs";
function gameCycle(){
    let timeElapsed = parseInt(Date.now()) - time
    statList.textContent = "You have " + layer2.moneyAmount + " dollars" + br + "This will work someday" + "You have been playing for " + timeElapsed;
    return;
}
let gameCycleVar = setInterval(gameCycle, 100)

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

function shopInteract(int, what) {
    if (layer2.tableAmount >= 1 && what == "table" && incrementTableComplete == true) {
        layer2.tableAmount -= 1;
        tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
        incrementTableComplete = false;
        increment(0, "table");
    }
    if (layer2.moneyAmount >= Math.floor(1 * 1.1 ** layer2.morbAmount) && what == 'morb' && incrementMorbComplete == true){
        layer2.moneyAmount -= Math.floor(1 * 1.1 ** layer2.morbAmount)
        moneyAmountText.textContent = "You have " + layer2.moneyAmount + " dollars";
        incrementMorbComplete = false;
        increment(0, "morb");
        if(true == true){

        }
    }
    return;
}

function increment(t, w) {
    switch(true){
        case (w == 'table' && t == 100):
            document.getElementById("sellTableFill").style.width = 0 + "%";
            layer2.moneyAmount += 1;
            moneyAmountText.textContent = "You have " + layer2.moneyAmount + " dollars";
            incrementTableComplete = true;
            break;
        case (w == 'table' && t < 100):
            t++;
            document.getElementById("sellTableFill").style.width = t + "%";
            var incrementTableTimer = setTimeout(increment, 10, t, 'table');
            break;
        case (w == 'morb' && t == 100):
            document.getElementById("buyMorbFill").style.width = 0 + "%";
            layer2.morbAmount += 1;
            moneyAmountText.textContent = "You have " + layer2.moneyAmount + " dollars";
            morbAmountText.textContent = "You have " + layer2.morbAmount + " Morbs";
            document.getElementById("bt2").classList.remove("hidden")
            incrementMorbComplete = true;
            morbed = true;
            break;
        case (w == 'morb' && t < 100):
            t++;
            document.getElementById("buyMorbFill").style.width = t + "%";
            var incrementMorbTimer = setTimeout(increment, 10, t, 'morb');
            break;
        default: console.log('uh oh')
    }
    if(morbed == true){
        document.querySelector("#buyMorb").childNodes[1].innerHTML = "Buy " + xAmount + " Morb for " + Math.floor(1 * 1.1 ** layer2.morbAmount) + " dollar"
        document.querySelector("#morbInsurance").classList.remove("hidden")
    }
    return;
}
var randomSeed = Math.floor(Math.random() * 101);
function morbInteract(int, what){
    if (layer2.morbAmount >= 1){
        if (randomSeed >= 55){
            layer2.tableAmount += 1
            tableAmountText.textContent = "You have " + layer2.tableAmount + " tables";
            console.log('Your Morb "found" a table!')
        } else if (randomSeed >= 10) {
            layer2.moneyAmount +=1
            moneyAmountText.textContent = "You have " + layer2.moneyAmount + " dollars";
            console.log("Your Morb stole someone's dollar!")
        } else {
            layer2.morbAmount -= 1
            morbAmountText.textContent = "You have " + layer2.morbAmount + " Morbs";
            console.log("Your Morb died horribly :(")
        }
    }
    randomSeed = Math.floor(Math.random() * 101);
    return;
}


function beautifulEffects(text){
    if(effectHappening == 1){
        // do something
    } else {
        // do something else
    }
}