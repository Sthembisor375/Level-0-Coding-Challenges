// Code for identifying the highest number in a 3 number list.

function maximumNumber(a, b, c) {

    var myArray = [a, b, c];
    var maxNumber = myArray[0];

    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] >= maxNumber) {
            maxNumber = myArray[i];
        }
    }

    console.log(maxNumber);
}

maximumNumber(3, 5, 959);

// Code for indentifying the highest number in an open list with variables changed.

function maximumOpen(...openList) {

    var myArrayOpen = [...openList];
    var maxNumberOpen = myArrayOpen[0];

    for (var i = 0; i < myArrayOpen.length; i++) {
        if (myArrayOpen[i] >= maxNumberOpen) {
            maxNumberOpen = myArrayOpen[i];
        }
    }

    console.log(maxNumberOpen);
}

maximumOpen(18, 58, 95, 75, 150);