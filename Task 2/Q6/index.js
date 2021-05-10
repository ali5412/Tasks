// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input:not(input[type=submit])");
    const refresh_values = () => {
        for (const input of inputs) {
            window[input.name] = input.value;
        }
    };

    document.getElementById("submit").onclick = () => {
        refresh_values();
        main();
    };
});

function main() {

    array = number.split("");

    let result = 1;
    for (let index = 0; index < array.length; index++) {
        result = result * parseFloat(array[index]);
    }
    console.log('Sum is: ' + result);
}