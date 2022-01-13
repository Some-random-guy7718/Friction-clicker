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
var u1Scaling = 2;
var u2Timer = setInterval(upgrade2Schedule, 500);
var softCap1 = false;
var s1Seen = false;
var softCap2 = false;
var s2Seen = false;
// declare elements
var upgradeText = document.createElement("div");
var frtx = document.createElement("div");
var cltx = document.createElement("div");
var bt = document.createElement("button");
var u1 = document.createElement("button");
var u2 = document.createElement("button");
var br = document.createElement("br");
// change element css
bt.className = "actionButton";
frtx.className = "changingText";
cltx.className = "changingText";
upgradeText.className = "upgradeContainer";
u1.className = "upgrade";
u2.className = "upgrade";
cltx.id = "clickedAmountText";
u1.append("Decrease friction more.", br, "Cost: sets your friction to " + friction * u1Cost);
u2.append("Automatically lower friction every second", br, "Cost: sets your friction to " + friction * u2Cost);
upgradeText.textContent = "Upgrades:";
bt.textContent = "Decrease Friction";
cltx.textContent = "You have manually decreased your friction " + pressed + " times";
frtx.textContent = "Your table has " + friction + " friction";
bt.title = "Click this button to multiply your current friction by " + clickPower;
u1.title = "Multiply friction by " + clickPower * u1Change + " instead of " + "0.99" + "\nYou cannot buy this upgrade if it will put your friction above 1";
u2.title = "Every second multiply your friction by " + u2Base * u2Change + " instead of " + u2Base + "\nYou cannot buy this upgrade if it will put your friction above 1";
//Appending elements
upgradeText.appendChild(u1);
upgradeText.appendChild(u2);
document.body.appendChild(frtx);
document.body.appendChild(bt);
document.body.appendChild(cltx);
document.body.appendChild(upgradeText);
// add on-click effects
bt.onclick = clickFunction;
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
            alert("You feel as if it just became significantly harder to decrease your table's friction... Trying to progress further is not recommended");
            s1Seen = true;
        }
        clickPower **= 0.1;
        u2Change **= 0.1;
        softCap1 = true;
    }
    if (friction > 0.1 && softCap1 === true) {
        clickPower **= 10;
        u2Change **= 10;
        softCap1 = false;
    }
    if (friction < 0.01 && softCap2 === false) {
        if (s2Seen === false) {
            alert("Javascript doesn't have much precision to give your table's friction anymore, and would like to inform you that you shouldn't be here in the first place until the next update. :<");
            s2Seen = true;
        }
        clickPower **= 0.001;
        u2Change **= 0.001;
        softCap2 = true;
    }
    if (friction > 0.01 && softCap2 === true) {
        clickPower **= 1000;
        u2Change **= 1000;
        softCap2 = false;
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
    if (1 > friction * u1Cost) {
        u1BoughtAmount += 1;
        friction *= u1Cost;
        clickPower *= u1Change;
        u1Cost *= u1Scaling ** u1BoughtAmount;
        updateFriction();
    }
    return;
}

function upgrade2() {
    if (1 > friction * u2Cost) {
        u2BoughtAmount += 1;
        friction *= u2Cost;
        u2Base *= u2Change;
        u2Cost *= u1Scaling ** u2BoughtAmount;
        updateFriction();
    }
    return;
}

function upgrade2Schedule() {
    friction *= u2Base;
    updateFriction();
    return;
}