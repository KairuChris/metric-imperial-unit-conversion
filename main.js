import './styles/style.css'
import {convertLength} from './functions/length-convert'
import {convertVolume} from './functions/volume-convert'
import { convertMass } from './functions/mass-convert'

let input = document.getElementById("number-input")
let inputLength = document.getElementsByClassName("input-length")
let toFeetResult = document.getElementById("result-feet")
let toMetersResult = document.getElementById("result-meters")

let inputVolume = document.getElementsByClassName("input-volume")
let toGallons = document.getElementById("result-gallons")
let toLiters = document.getElementById("result-liters")

let inputMass = document.getElementsByClassName("input-mass")
let toPounds = document.getElementById("result-pounds")
let toKilos = document.getElementById("result-kilos")

// for length conversion
for (let i = 0 ; i < inputLength.length; i++){
  convertLength(input,inputLength[i],toFeetResult,toMetersResult)
}

// for volume conversion
for ( let i = 0; i < inputVolume.length; i++){
  convertVolume(input, inputVolume[i], toGallons, toLiters)
}

// for mass conversion
for ( let i = 0; i < inputMass.length; i++){
  convertMass(input, inputMass[i], toPounds, toKilos)
}


