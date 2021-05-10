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

    arraynumber = number.split("");
    arraylength = arraynumber.length / 2;

    if (arraylength % 1 !== 0) {
        arraylength = Math.floor(arraylength);
        console.log("Central element is " + arraynumber[arraylength]);
        if ((arraynumber[arraylength] % 2) == 0) {
            console.log(`${arraynumber[arrlarraylengthen]} is an even number`);
        } else {
            console.log(`${arraynumber[arraylength]} is an odd number`);
        }
    } else {
        const central = parseFloat(arraynumber[arraylength]) + parseFloat(arraynumber[arraylength - 1]);
        console.log("Central element is " + central);

        if ((central % 2) == 0) {
            console.log(`This ${central} is an even number`);
        } else {
            console.log(`This ${central} is an odd number`);
        }
    }


}