//  GO BUTTON EVENT LISTENER

/*Eq = Equation */

let btn = document.getElementById('go');
btn.addEventListener('click', () =>{
let input = document.getElementById('input').value;

// LENGHT
let meterToFeet = document.getElementById('meterToFeet');
let meterToFeetEq = input * 3.281;
meterToFeet.textContent = `${input} meters = ${meterToFeetEq.toFixed(3)} feet`;
// LENGHT
let feetToMeter = document.getElementById('feetToMeter');
let feetToMeterEq = input / 3.281;
feetToMeter.textContent = `${input} feet = ${feetToMeterEq.toFixed(3)} meters`;


// VOLUME
let literToGallo = document.getElementById('literToGallo');
let literToGalloEq = input / 3.785;
literToGallo.textContent = `${input} liters = ${literToGalloEq.toFixed(3)} gallons`;
// VOLUME
let galloToLiter = document.getElementById('galloToLiter');
let galloToLiterEq = input * 3.785;
galloToLiter.textContent = `${input} gallons = ${galloToLiterEq.toFixed(3)} liters`;


// MASS
let kiloToPoun = document.getElementById('kiloToPoun');
let kiloToPounEq = input * 2.205;
kiloToPoun.textContent = `${input} kilos = ${kiloToPounEq.toFixed(3)} pounds`;
// MASS
let pounToKilo = document.getElementById('pounToKilo');
let pounToKiloEq = input / 2.205;
pounToKilo.textContent = `${input} pounds = ${pounToKiloEq.toFixed(3)} kilos`;

})

// ENTER KEY EVENTLISTENER
let classInput = document.querySelector('.inputt');
classInput.addEventListener('keydown', (e) =>{
if( e.key === 'Enter'){
let input = document.getElementById('input').value;

// LENGHT
let meterToFeet = document.getElementById('meterToFeet');
let meterToFeetEq = input * 3.281;
meterToFeet.textContent = `${input} meters = ${meterToFeetEq.toFixed(3)} feet`;
// LENGHT
let feetToMeter = document.getElementById('feetToMeter');
let feetToMeterEq = input / 3.281;
feetToMeter.textContent = `${input} feet = ${feetToMeterEq.toFixed(3)} meters`;


// VOLUME
let literToGallo = document.getElementById('literToGallo');
let literToGalloEq = input / 3.785;
literToGallo.textContent = `${input} liters = ${literToGalloEq.toFixed(3)} gallons`;
// VOLUME
let galloToLiter = document.getElementById('galloToLiter');
let galloToLiterEq = input * 3.785;
galloToLiter.textContent = `${input} gallons = ${galloToLiterEq.toFixed(3)} liters`;


// MASS
let kiloToPoun = document.getElementById('kiloToPoun');
let kiloToPounEq = input * 2.205;
kiloToPoun.textContent = `${input} kilos = ${kiloToPounEq.toFixed(3)} pounds`;
// MASS
let pounToKilo = document.getElementById('pounToKilo');
let pounToKiloEq = input / 2.205;
pounToKilo.textContent = `${input} pounds = ${pounToKiloEq.toFixed(3)} kilos`;

}
})
