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

maximumNumberOpenList(2, 4, 6, 8, 10, 12);