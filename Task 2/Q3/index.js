alert("Hello");
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
    const first_num = array[0];
    const second_num = array[array.length - 1];

    if (first_num == second_num) {
        console.log('first Number is equal to last number')
    } else {
        console.log('first Number is not equal to last number')
    }


}