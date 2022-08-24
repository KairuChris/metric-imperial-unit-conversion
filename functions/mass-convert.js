export function convertMass (element, valueInput, toPounds, toKilos){
    const mass = () => {
        let input = Number(element.value)
        valueInput.textContent = input
        toPounds.textContent = (input *  2.20462).toFixed(3)
        toKilos.textContent = (input /  2.20462).toFixed(3)
    }
    element.addEventListener("input", () => mass())
}