function triangleArea(a, b, c) {

    var semiPerimeter = (a + b + c) / 2;
    var area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    console.log(area);

}

triangleArea(9, 8, 8);