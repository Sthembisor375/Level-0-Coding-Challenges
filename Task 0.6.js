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

maximumNumber();

function maximumNumberOpenList(...openList) {

    var myArrayOpen = [...openList];
    var maxNumberOpen = myArrayOpen[0];

    for (var i = 0; i < myArrayOpen.length; i++) {
        if (myArrayOpen[i] >= maxNumberOpen) {
            maxNumberOpen = myArrayOpen[i];
        }
    }

    console.log(maxNumberOpen);
}

maximumNumberOpenList();