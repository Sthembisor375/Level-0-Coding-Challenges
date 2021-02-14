//Function that identifies and prints common letters/characters in two strings

function sharedCharacterIdentifier(firstWord, secondWord) {

    if (firstWord.length > secondWord.length) {

        for (var i = 0; i < firstWord.length; i++) {

            var matches = firstWord.includes(secondWord[i]);

            if (matches == true) {
                console.log(secondWord[i])
            }

        }
    } else {

        for (var i = 0; i < secondWord.length; i++) {

            var matches = secondWord.includes(firstWord[i]);

            if (matches == true) {
                console.log(firstWord[i])
            }

        }

    }


}

sharedCharacterIdentifier();