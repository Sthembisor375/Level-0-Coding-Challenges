// Function for calculating the area of a triangle using the length of sides.
function triangleArea(a, b, c) {
    var semiPerimeter = (a + b + c) / 2;
    area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    console.log(area);
}

triangleArea(5, 5, 2);