function toRadians(degrees) {
    return degrees * Math.PI / 180;
}


function cleanNumber(number) {

    if (!Number.isFinite(number)) {
        return "Undefined";
    }

    if (Math.abs(number) < 0.00000001) {
        number = 0;
    }

    return Number(number.toFixed(6));
}


function calculate() {

    const A = parseFloat(document.getElementById("angleA").value);
    const B = parseFloat(document.getElementById("angleB").value);


    if (isNaN(A) || isNaN(B)) {

        alert("Please enter values for both Angle A and Angle B.");

        return;
    }


    const a = toRadians(A);
    const b = toRadians(B);


    /* ================= SIN ================= */

    const sinPlus =
        Math.sin(a) * Math.cos(b) +
        Math.cos(a) * Math.sin(b);


    const sinMinus =
        Math.sin(a) * Math.cos(b) -
        Math.cos(a) * Math.sin(b);


    /* ================= COS ================= */

    const cosPlus =
        Math.cos(a) * Math.cos(b) -
        Math.sin(a) * Math.sin(b);


    const cosMinus =
        Math.cos(a) * Math.cos(b) +
        Math.sin(a) * Math.sin(b);


    /* ================= TAN ================= */

    const tanA = Math.tan(a);
    const tanB = Math.tan(b);


    const tanPlusDenominator =
        1 - tanA * tanB;


    const tanMinusDenominator =
        1 + tanA * tanB;


    let tanPlus;

    let tanMinus;


    if (Math.abs(tanPlusDenominator) < 0.00000001) {

        tanPlus = "Undefined";

    } else {

        tanPlus =
            cleanNumber(
                (tanA + tanB) /
                tanPlusDenominator
            );
    }


    if (Math.abs(tanMinusDenominator) < 0.00000001) {

        tanMinus = "Undefined";

    } else {

        tanMinus =
            cleanNumber(
                (tanA - tanB) /
                tanMinusDenominator
            );
    }


    /* ================= DISPLAY ================= */

    animateResult("sinPlus", cleanNumber(sinPlus));
    animateResult("sinMinus", cleanNumber(sinMinus));

    animateResult("cosPlus", cleanNumber(cosPlus));
    animateResult("cosMinus", cleanNumber(cosMinus));

    animateResult("tanPlus", tanPlus);
    animateResult("tanMinus", tanMinus);

}


function animateResult(id, value) {

    const element = document.getElementById(id);

    element.style.transform = "scale(0.7)";
    element.style.opacity = "0";


    setTimeout(() => {

        element.textContent = value;

        element.style.transform = "scale(1)";
        element.style.opacity = "1";

    }, 120);
}


function resetCalculator() {

    document.getElementById("angleA").value = "";
    document.getElementById("angleB").value = "";


    const results = [
        "sinPlus",
        "sinMinus",
        "cosPlus",
        "cosMinus",
        "tanPlus",
        "tanMinus"
    ];


    results.forEach(id => {

        document.getElementById(id).textContent = "—";

    });

}


/* Enter key support */

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        calculate();

    }

});
