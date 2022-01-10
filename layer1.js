// declare variables
var pressed = 0;
var friction = 1;
var clickPower = 0.99;
var u1Bought = false;
var btu1After = Math.pow(clickPower,20);
var btu1Change = clickPower - 0.01;
// declare elements
var upgradeText = document.createElement("div");
var frtx = document.createElement("div");
var cltx = document.createElement("div");
var bt = document.createElement("button");
var btu1 = document.createElement("button");
var br = document.createElement("br");
// change element css
bt.className = "actionButton";
frtx.className = "changingText";
cltx.className = "changingText";
upgradeText.className = "upgradeContainer";
btu1.className = "upgrade";
cltx.id = "clickedAmountText";
btu1.append("Decrease friction more.", br, "Cost: sets your friction to " + friction/btu1After);
upgradeText.textContent = "Upgrades:";
bt.textContent = "Decrease Friction";
cltx.textContent = "You have manually decreased your friction " + pressed + " times";
frtx.textContent = "Your table has " + friction + " friction";
bt.title = "Click this button to multiply your current friction by " + clickPower;
btu1.title = "Multiply friction by " + btu1Change + " instead of " + "0.99" + "\nYou cannot buy this upgrade if it will put your friction above 1";
//Appending elements
upgradeText.appendChild(btu1);
document.body.appendChild(frtx);
document.body.appendChild(bt);
document.body.appendChild(cltx);
document.body.appendChild(upgradeText);
// add on-click effects
btu1.onclick = upgrade;
bt.onclick = clickFunction;

function clickFunction() {
	if (friction < 0.55) {
		alert('You have finished all the content currently implemented.');
		return;
	}
	pressed += 1;
	friction *= clickPower;
	updateFriction();
	return;
}

function updateFriction() {
	frtx.textContent = "Your table has " + friction + " friction";
	cltx.textContent = "You have manually decreased your friction " + pressed + " times";
	btuStuff();
	return;
}

function btuStuff(){
	btu1.textContent = "";
	btu1.append("Decrease friction more.", br, "Cost: sets your friction to " + friction / btu1After);
	return;
}

function upgrade() {
	if (friction < 0.82 && u1Bought === false){
		u1Bought = true;
		friction /= btu1After;
		updateFriction();
		clickPower -= 0.01;
		return;
	}
	return;
}