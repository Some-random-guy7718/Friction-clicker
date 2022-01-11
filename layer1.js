// declare variables
var pressed = 0;
var friction = 1;
var clickPower = 0.99;
var u1Bought = false;
var u2Bought = false;
var autoUpdate = false;
var btu1After = Math.pow(clickPower,20);
var btu1Change = clickPower - 0.01;
var btu2Change = 0.987;
var btu2Timer = setInterval(upgrade2Schedule,1000);
// declare elements
var upgradeText = document.createElement("div");
var frtx = document.createElement("div");
var cltx = document.createElement("div");
var bt = document.createElement("button");
var btu1 = document.createElement("button");
var btu2 = document.createElement("button");
var br = document.createElement("br");
// change element css
bt.className = "actionButton";
frtx.className = "changingText";
cltx.className = "changingText";
upgradeText.className = "upgradeContainer";
btu1.className = "upgrade";
btu2.className = "upgrade";
cltx.id = "clickedAmountText";
btu1.append("Decrease friction more.", br, "Cost: sets your friction to " + friction/btu1After);
btu2.append("Automatically lower friction every second", br, "Cost: sets your friction to " + friction/btu1After);
upgradeText.textContent = "Upgrades:";
bt.textContent = "Decrease Friction";
cltx.textContent = "You have manually decreased your friction " + pressed + " times";
frtx.textContent = "Your table has " + friction + " friction";
bt.title = "Click this button to multiply your current friction by " + clickPower;
btu1.title = "Multiply friction by " + btu1Change + " instead of " + "0.99" + "\nYou cannot buy this upgrade if it will put your friction above 1";
btu2.title = "Every second multiply your friction by " + btu2Change + "\nYou cannot buy this upgrade if it will put your friction above 1";
//Appending elements
upgradeText.appendChild(btu1);
upgradeText.appendChild(btu2);
document.body.appendChild(frtx);
document.body.appendChild(bt);
document.body.appendChild(cltx);
document.body.appendChild(upgradeText);
// add on-click effects
bt.onclick = clickFunction;
btu1.onclick = upgrade1;
btu2.onclick = upgrade2;

function clickFunction() {
	if (friction < 0.1) {
		alert('You have finished all the content currently implemented.');
		clearInterval(btu2Timer);
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
	btu1Stuff();
	btu2Stuff();
	return;
}

function btu1Stuff(){
	btu1.textContent = "";
	btu1.append("Decrease friction more.", br, "Cost: sets your friction to " + friction / btu1After);
	return;
}

function btu2Stuff(){
	btu2.textContent = "";
	btu2.append("Automatically lower friction every second", br, "Cost: sets your friction to " + friction/btu1After);
	return;
}

function upgrade1() {
	if (1 > friction/btu1After && u1Bought === false){
		u1Bought = true;
		friction /= btu1After;
		updateFriction();
		clickPower -= 0.01;
	}
	return;
}

function upgrade2() {
	if (1 > friction/btu1After && u2Bought === false){
		u2Bought = true;
		friction /= btu1After;
		autoUpdate = true;
		updateFriction();
	}
	return;
}

function upgrade2Schedule() {
	if (friction < 0.1) {
		alert('You have finished all the content currently implemented.');
		clearInterval(btu2Timer);
		return;
	}
	if(u2Bought === true){
		friction *= btu2Change;
	}
	updateFriction();
	return;
}