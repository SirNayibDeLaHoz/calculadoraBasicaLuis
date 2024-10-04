// Variables
let display = document.getElementById("display");

// Función para agregar valor al display
const appendValue = value => display.value += value;

// Función para limpiar el display
const clearDisplay = () => display.value = '';

// Función para realizar el cálculo
const calculate = () => {
    try {
        const result = eval(display.value);
        display.value = `${result}`;
    } catch (error) {
        display.value = 'Error';
    }
};