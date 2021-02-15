function timeConversion(minutes) {

    var unroundedHours = minutes / 60;
    var roundedHours = Math.floor(unroundedHours);

    var decimalMinutes = unroundedHours - roundedHours;
    var roundedMinutes = Math.round(decimalMinutes * 60);

    if (roundedHours == 0) {
        var hourString = " hours";
        roundedHours = 0;
    } else if (roundedHours == 1) {
        var hourString = " hour";
    } else { var hourString = " hours" };

    if (roundedMinutes == 0) {
        var minuteString = " minutes";
        roundedMinutes = 0;
    } else if (roundedMinutes == 1) {
        var minuteString = " minute";
    } else { var minuteString = " minutes" };

    console.log(roundedHours + hourString + ", " + roundedMinutes + minuteString);
}

timeConversion(75)