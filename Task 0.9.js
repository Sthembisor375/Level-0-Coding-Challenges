function vowelIdentifier(word) {

    var vowels = "aeiouAEIOU";

    for (var i = 0; i < word.length; i++) {

        var matches = vowels.includes(word[i]);

        if (matches == true) {
            console.log(word[i])
        }

    }


}

vowelIdentifier();