// declare variables
var pressed = 0;
var friction = 1;
var clickPower = 0.99;
var u2Base = 1;
var u1BoughtAmount = 0;
var u2BoughtAmount = 0;
var u1Change = 0.99;
var u2Change = 0.99;
var u1Cost = 1.22;
var u2Cost = 1.22;
var uScaling = 2;
var u2Timer = setInterval(upgrade2Schedule, 500);
var softCap1 = false;
var s1Seen = false;
var layer1End = false;
// declare elements
var bt = document.getElementById(bt);
var upgradeText = document.createElement("div");
var frtx = document.createElement("div");
var cltx = document.createElement("div");
var u1 = document.createElement("button");
var u2 = document.createElement("button");
var br = document.createElement("br");
// change element css
frtx.className = "changingText layer1";
cltx.className = "changingText layer1";
upgradeText.className = "genericContainer layer1";
u1.className = "upgrade layer1";
u2.className = "upgrade layer1";
cltx.id = "clickedAmountText";
u1.append("Decrease friction more.", br, "Cost: sets your friction to " + friction * u1Cost);
u2.append("Automatically lower friction every second", br, "Cost: sets your friction to " + friction * u2Cost);
upgradeText.textContent = "Upgrades:";
cltx.textContent = "You have manually decreased your friction " + pressed + " times";
frtx.textContent = "Your table has " + friction + " friction";
u1.title = "Multiply friction by " + clickPower * u1Change + " instead of " + "0.99" + "\nYou cannot buy this upgrade if it will put your friction above 1";
u2.title = "Every second multiply your friction by " + u2Base * u2Change + " instead of " + u2Base + "\nYou cannot buy this upgrade if it will put your friction above 1";
//Appending elements
upgradeText.appendChild(u1);
upgradeText.appendChild(u2);
document.body.appendChild(frtx);
document.body.appendChild(cltx);
document.body.appendChild(upgradeText);
// add on-click effects

u1.onclick = upgrade1;
u2.onclick = upgrade2;

function clickFunction() {
    pressed += 1;
    friction *= clickPower;
    updateFriction();
    return;
}

function updateFriction() {
    frtx.textContent = "Your table has " + friction + " friction";
    cltx.textContent = 'You have manually decreased your friction ' + pressed + ' times';
    if (friction < 0.1 && softCap1 === false) {
        if (s1Seen === false) {
            alert("You feel as if it just became significantly harder to decrease your table's friction... Trying to progress further may have profitable consequences");
            s1Seen = true;
        }
        clickPower **= 0.1;
        u2Change **= 0.1;
        softCap1 = true;
    } else if (friction > 0.1 && softCap1 === true){
        clickPower **= 10;
        u2Change **= 10;
        softCap1 = false;
    } else if (friction < 0.05) {
        layer1End = true;
        alert("You feel that you can't possibly decrease your table's friction anymore. So you decide to play a better incremental game")
        clearInterval(u2Timer)
        document.getElementById("bt").style.display = "none";
        let layer1 = document.getElementsByClassName("layer1");
        for (i = 0; i < layer1.length - 1; i++){
            layer1[i].style.display = "none";
            }
        document.getElementById("layer1End").style.display = "block";
    }
    u1Stuff();
    u2Stuff();
    return;
}

function u1Stuff() {
    u1.textContent = "";
    u1.append("Decrease friction more.", br, "Cost: sets your friction to " + friction * u1Cost);
    u1.title = "Multiply friction by " + clickPower * u1Change + " instead of " + clickPower + "\nYou cannot buy this upgrade if it will put your friction above 1";
    return;
}

function u2Stuff() {
    u2.textContent = "";
    u2.append("Automatically lower friction every second", br, "Cost: sets your friction to " + friction * u2Cost);
    u2.title = "Every second multiply your friction by " + u2Base * u2Change + " instead of " + u2Base + "\nYou cannot buy this upgrade if it will put your friction above 1";
    return;
}

function upgrade1() {
    if (1 > friction * u1Cost && softCap1 === true) {
        u1BoughtAmount += 1;
        friction *= u1Cost;
        u1Cost *= uScaling ** u1BoughtAmount;
        clickPower **= 10
        clickPower *= u1Change;
        clickPower **= 0.1;
    } else if (1 > friction * u1Cost && softCap1 === false) {
        u1BoughtAmount += 1;
        friction *= u1Cost;
        u1Cost *= uScaling ** u1BoughtAmount;
        clickPower *= u1Change;
    }
    updateFriction();
    return;
}

function upgrade2() {
    if (1 > friction * u2Cost && softCap1 === true) {
        u2BoughtAmount += 1;
        friction *= u2Cost;
        u2Base **= 10
        u2Base *= u2Change;
        u2Base **= 0.1;
        u2Cost *= uScaling ** u2BoughtAmount;
    } else if (1 > friction * u2Cost && softCap1 === false) {
        u2BoughtAmount += 1;
        friction *= u2Cost;
        u2Base *= u2Change;
        u2Cost *= uScaling ** u2BoughtAmount;
    }
    updateFriction();
    return;
}

function upgrade2Schedule() {
    friction *= u2Base;
    updateFriction();
    return;
}

function endLayer1() {
    if (layer1End === true) {
        document.getElementById("layer1End").style.display = "none";
        var layer2Load1 = document.createElement("script");
        var layer2Load2 = document.createElement("script");
        layer2Load1.src = "layer2.js";
        layer2Load2.src = "break_eternity.js";
        document.body.appendChild(layer2Load1);
        document.body.appendChild(layer2Load2);
    }
}
