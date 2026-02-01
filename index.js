/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const metersToFeet = 3.281
const feetToMeters = 0.305
const litersToGallons = 0.264
const gallonsToLiters = 3.785
const kilosToPounds = 2.204
const poundsToKilos = 0.453
const lengthConverter = document.getElementById("length-converter")
const volumeConverter = document.getElementById("volume-converter")
const massConverter = document.getElementById("mass-converter")
const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")



buttonEl.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthConverter.textContent = 
    `${baseValue} meters = ${baseValue * metersToFeet.toFixed(3)} feet ┃
    ${baseValue} feet = ${baseValue * feetToMeters.toFixed(3)} meters` 
    
    volumeConverter.textContent = 
    `${baseValue} liters = ${baseValue * litersToGallons.toFixed(3)} gallons ┃
    ${baseValue} gallons = ${baseValue * gallonsToLiters.toFixed(3)} liters`
    
    massConverter.textContent = 
    `${baseValue} kilos = ${baseValue * kilosToPounds.toFixed(3)} pounds ┃
    ${baseValue} pounds = ${baseValue * poundsToKilos.toFixed(3)} kilos`
})

