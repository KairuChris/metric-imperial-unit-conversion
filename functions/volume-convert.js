export function convertVolume (element, valueInput, toGallons, toLiters){

    const volume = () => {
        let input = Number(element.value)
        valueInput.textContent = input
        toGallons.textContent = (input * 0.26417).toFixed(3)
        toLiters.textContent = (input / 0.26417).toFixed(3)
    }
    element.addEventListener("input", () => volume())
}