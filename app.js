//  GO BUTTON EVENT LISTENER

/* kilograms to pound 
Eq = Equation */

let btn = document.getElementById('go');
btn.addEventListener('click', () =>{
let input = document.getElementById('input').value;
let kiloToPoun = document.getElementById('kiloToPoun');
let kiloToPounEq = input * 2.205;
kiloToPoun.textContent += `${input} kilos = ${kiloToPounEq.toFixed(3)} pounds`;
console.log(kiloToPoun);
})

// ENTER KEY EVENTLISTENER
let classInput = document.querySelector('.inputt');
classInput.addEventListener('keydown', (e) =>{
if( e.key === 'Enter'){
let input = document.getElementById('input').value;
let kiloToPoun = document.getElementById('kiloToPoun');
let kiloToPounEq = input * 2.205;
kiloToPoun.textContent += `${input} kilos = ${kiloToPounEq.toFixed(3)} pounds`;
console.log(kiloToPoun);
}
})
