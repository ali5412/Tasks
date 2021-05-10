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

    const array = number.split("");
    const half = Math.floor(array.length / 2);

    let output = 0;

    for (let index = 0; index < half; index++) {

        output = output + parseFloat(array[index]);

    }
    console.log(output);
}