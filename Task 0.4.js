// Function that identifies whether a number is even or odd

function evenOrOdd(numberInput) {
    remainder = numberInput % 2;

    if (remainder == 1) {
        console.log("Odd")
    };

    if (remainder == 0) {
        console.log("Even")
    } else {
        console.log("This value is not an integer.")
    }
}

evenOrOdd();