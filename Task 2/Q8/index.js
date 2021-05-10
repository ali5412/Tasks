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

    number = number.split("");

    const reversenumber = number.reverse();

    if (parseFloat(number) == parseFloat(number.reverse())) {
        console.log("The Entered Number is Pelindrome")
    } else {
        console.log("The Entered Number is NOT Pelindrome")
    }


}