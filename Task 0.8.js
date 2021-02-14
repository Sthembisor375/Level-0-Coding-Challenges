// Function for converting numbers to hours and minutes.

function timeConversion(minutes) {

    unroundedHours = minutes / 60;                        //Converts minutes to hours
    roundedHours = Math.floor(unroundedHours);

    decimalMinutes = unroundedHours - roundedHours;       //Converts decimal to minutes
    roundedMinutes = Math.round(decimalMinutes * 60);

    separator = ", ";

    if (roundedHours == 0) {
        hourString = "";
        roundedHours = "";
        separator = "";
    } else if (roundedHours == 1) {
        hourString = " hour";
    } else { hourString = " hours" };

    if (roundedMinutes == 0) {
        minuteString = "";
        roundedMinutes = "";
        separator = "";
    } else if (roundedMinutes == 1) {
        minuteString = " minute";
    } else { minuteString = " minutes" };

    console.log(roundedHours + hourString + separator + roundedMinutes + minuteString);
}

timeConversion()