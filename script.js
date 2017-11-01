//function
var result;

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        result = 'Nieprawidłowe dane'
    } else {
        result = a * h / 2
    }
    return result;
};
var triangle1Area = getTriangleArea(8, 11);
var triangle2Area = getTriangleArea(3, 7);
var triangle3Area = getTriangleArea(-1, 5);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);