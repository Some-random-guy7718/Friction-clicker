{
// resources
var tableAmount = 0;
var morbAmount = 0;
let frictionAmount = 0;
var moneyAmount = 0;
let areaOwned = 100;
let morbfactoryAmount = 0;
let tablesForaged = 0;

// resource caps
let tableCap = 20;
let moneyCap = 1000;
let morbCap = 161700;
let tablesForagedCap = areaOwned/5; //20

// morb usage
let morbsUnused = 0;
let morbsExploring = []; //where
let morbsFarming = []; //what crop
let morbsForaging = 0;
let morbsDeforestating = []; //type
let morbsMining = []; //where
let morbsMorbing = 0;
let morbsStabbing = 0;
let morbsPropagandizing = 0;
let morbsArting = 0; //what
let morbsMetalurgizing = []; //what

// planetary body stats
let earthVolume = new Decimal(1.086e21);
let moonVolume = new Decimal(2.19e19);

// physics
let physicsg = new Decimal(6.673e-11); //gravitational constant
let physicsc = 299792458; //speed of light
let geopotential = [];

// precipitation
let precipitation = [];
let precipitationType = [];

// other weather
let humidity = 0;
let temperature = 290;
let pressure = 1013.25;
let visibility = 1000000;
let dayLength = 86400;
let sunLength = 43200;
let moonLength = 43200;
let brightness = 1;
let irradiance = 1361;
let evaporation = [];
let cloudHeight = [];
let wind = [];
let gusts = [];
let microGusts = [];

let elements = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


// 1 = didn't get table, 2 = bar is filling
var previousMessageNumber = 0;
let logMessage1 = document.createElement('span');
let logMessage1Repeated = 1;
logMessage1.className = 'log-message';
let logMessage2 = document.createElement('span');
let logMessage2Repeated = 1;
logMessage2.className = 'log-message';

const time = parseInt(Date.now());
var timeElapsed = time;
var morbed = false;
const gameUpdateSpeed = 20;



let reset = function(){
    // resources
let tableAmount = 0;
let morbAmount = 0;
let frictionAmount = 0;
let moneyAmount = 0;
let areaOwned = 100;
let morbfactoryAmount = 0;
let tablesForaged = 0;

// resource caps
let tableCap = 20;
let moneyCap = 1000;
let morbCap = 161700;
let tablesForagedCap = areaOwned/5;

// morb usage
let morbsUnused = 0;
let morbsExploring = []; //where
let morbsFarming = []; //what crop
let morbsForaging = 0;
let morbsDeforestating = []; //type
let morbsMining = []; //where
let morbsMorbing = 0;
let morbsStabbing = 0;
let morbsPropagandizing = 0;
let morbsArting = 0; //what
let morbsMetalurgizing = []; //what

// planetary body stats
let earthVolume = new Decimal(1.086e21);
let moonVolume = new Decimal(2.19e19);

// physics
let physicsg = new Decimal(6.673e-11); //gravitational constant
let physicsc = 299792458; //speed of light
let geopotential = [];

// precipitation
let precipitation = [];
let precipitationType = [];

// other weather
let humidity = 0;
let temperature = 290;
let pressure = 1013.25;
let visibility = 1000000;
let dayLength = 86400;
let sunLength = 43200;
let moonLength = 43200;
let brightness = 1;
let irradiance = 1361;
let evaporation = [];
let cloudHeight = [];
let wind = [];
let gusts = [];
let microGusts = [];

let elements = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// 1 = didn't get table, 2 = no table to sell, 3 = not enough money, 4 = bar is filling
let logMessage1 = document.createElement('span');
let logMessage1Repeated = 1;
logMessage1.className = 'logMessage';
let logMessage2 = document.createElement('span');
let logMessage2Repeated = 1;
logMessage2.className = 'logMessage';

let timeElapsed = time;
let morbed = false;
    return;
}

function updateTime() {
    return timeElapsed = parseInt(Date.now()) - time;
}
const updateTimeInterval = setInterval(updateTime, gameUpdateSpeed);

function forageTable() {
    if (tablesForagedCap <= tablesForaged ){
		previousMessageNumber = 1;
        logMessage1.innerHTML = "You don't think you are going to find any more tables...";
        document.getElementsByClassName('log')[0].prepend(logMessage1);
        document.getElementById("forage-table-button").disabled = true;
    } else if (tableCap*Math.random() >= tablesForaged) {
        tableAmount += 1;
        tablesForaged += 1;
        document.getElementById("sell-table-button").disabled = false;
        document.getElementById("table-amount").innerHTML = tableAmount;
    } else {
        if (previousMessageNumber === 1){
            logMessage1Repeated += 1;
            logMessage1.innerHTML = "You didn't find any tables (" + Math.floor(100*(tablesForaged/tablesForagedCap)) + "%) (" + logMessage1Repeated + ")";
            return document.getElementsByClassName('log')[0].prepend(logMessage1);
        }
        logMessage1Repeated = 1;
        logMessage1.innerHTML = "You didn't find any tables (" + Math.floor(100*(tablesForaged/tablesForagedCap)) + "%)";
        document.getElementsByClassName('log')[0].prepend(logMessage1);
    }
    return;
}

let morbCostBase = 2;
//let morbCostArithmetic = 0;
let morbCostGeometric = 1.3;
let morbCostCurrent;
//let morbCostTotal;
function morbCostCalculate() {
    return morbCostCurrent = (Math.floor(morbCostBase * morbCostGeometric ** morbAmount));
}
morbCostCalculate();

let tableBarIncrementing = false;
let morbBarIncrementing = false;
let tableInteractDelay = 1000;
let morbInteractDelay = 2500;
function shopInteract(item){
    switch(true){
        case (item === 'table' && tableAmount >= 1 && !tableBarIncrementing):
            tableAmount -= 1;
            if (tableAmount === 0) {document.getElementById("sell-table-button").disabled = true};
            document.getElementById("table-amount").innerHTML = tableAmount;
            tableBarIncrementing = true;
            return increment(tableInteractDelay, item);
        case (item === 'morb' && moneyAmount >= morbCostCurrent && !morbBarIncrementing):
            moneyAmount -= morbCostCurrent;
            if (moneyAmount <= morbCostCurrent) {document.getElementById("buy-morb-button").disabled = true};
            document.getElementById("money-amount").innerHTML = moneyAmount;
            document.getElementById("morb-cost-current").innerHTML = "Cost: " + morbCostCalculate() + " money";
            morbBarIncrementing = true;
            return increment(morbInteractDelay, item);
        case (eval(item + "BarIncrementing")):
            if (previousMessageNumber === 2){
                logMessage2Repeated += 1;
                logMessage2.innerHTML = "That bar is currently filling          (" + logMessage2Repeated + ")";
                return document.getElementsByClassName('log')[0].prepend(logMessage2);
            }
            previousMessageNumber = 2;
            logMessage2Repeated = 1;
            logMessage2.innerHTML = "That bar is currently filling";
            return document.getElementsByClassName('log')[0].prepend(logMessage2);
        default: return console.log('uh oh, shopInteract() failed.');
    }
}

// fill the bar when shop item is purchased. t = duration, w = which bar
function increment(t, item) {
    if (t > 0){
        document.getElementById(item + "-fill").style.width = (100*(1-t/eval(item + "InteractDelay"))) + "%";
        t -= gameUpdateSpeed;
        return setTimeout(increment, gameUpdateSpeed, t, item);
    } 
    document.getElementById(item + "-fill").style.width = 0 + "%";
    switch (true){
        case (item === "table"):
            tableBarIncrementing = false;
            moneyAmount += 1;
            if (morbCostCurrent <= moneyAmount) {document.getElementById("buy-morb-button").disabled = false};
            return document.getElementById("money-amount").innerHTML = moneyAmount;
        case (item === "morb"):
            morbBarIncrementing = false;
            morbAmount += 1;
            document.getElementById("morb-amount").innerHTML = morbAmount;
            if (morbAmount === 1){
                document.getElementById("morb-amount-container").style.display = "";
                morbed = true;
            }
    }
    return;
}


//console.log("Your Morb died horribly :(")

/*
function tabLoad(t) {
    document.querySelector(".tab" + `${lastTab}`).classList.add("hidden");
    document.querySelector(".tab" + `${t}`).classList.remove("hidden");
    return lastTab = t;
}*/
}