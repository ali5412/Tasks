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
    arr = number.split("");



    if (number.length == 3) {

        let sum = 0;
        for (let index = 0; index < 3; index++) {
            arr[index] = arr[index] * arr[index] * arr[index];
            console.log(arr[index]);
            sum = sum + parseFloat(arr[index]);
        }

        if (sum == number) {
            console.log(sum + '' + " It's a ArmStrong Number ");
        } else {
            console.log(sum + '' + "  It's Not a ArmStrong Number");
        }

    } else {
        console.log("InVaLiD OpeRaToR!! TrY Again");
    }
}