function sharedCharacterIdentifier(firstWord, secondWord) {

    var matchingCharacters = [];

    if (firstWord.length > secondWord.length) {

        for (var i = 0; i < firstWord.length; i++) {

            var matches = firstWord.includes(secondWord[i]);

            if (matches == true) {
                matchingCharacters.push(" " + secondWord[i])
            }

        }
    } else {

        for (var i = 0; i < secondWord.length; i++) {

            var matches = secondWord.includes(firstWord[i]);

            if (matches == true) {
                matchingCharacters.push(" " + firstWord[i])
            }

        }

    }

    console.log("Common letters: " + matchingCharacters)



}

sharedCharacterIdentifier();