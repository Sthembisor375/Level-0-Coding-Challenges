function evenOrOdd(numberInput) {

    var remainder = numberInput % 2;

    if (remainder == 1) {
        console.log("Odd")
    };

    if (remainder == 0) {
        console.log("Even")
    }

}

evenOrOdd(8);