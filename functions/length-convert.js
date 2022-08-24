export function convertLength (element, valueInput, toFeet, toMeters){
    
    const length = () =>{
        let input = Number(element.value) 
        valueInput.textContent = input   
        toFeet.textContent =  (input * 3.281).toFixed(3)
        toMeters.textContent = (input / 3.281).toFixed(3)
    }

    element.addEventListener("input", () => length())

}