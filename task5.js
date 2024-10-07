// Use callback functions and complete remaining arithmetic operations 
// (Multiplication remainders,division,etc--)

function calculateRemainder(num1, num2, operator) {
    operator(num1,num2);
}
function add (n1,n2){
    console.log(n1+n2);
}
function substract (n1,n2){
    console.log(n1-n2);
}
function multiply (n1,n2){
    console.log(n1*n2);
}
function divide (n1,n2){
    console.log(n1%n2);
}
function exponential (n1,n2){
    console.log(n1**n2);
}
calculateRemainder(7,8,add);
calculateRemainder(7,8,substract);
calculateRemainder(7,8,multiply);
calculateRemainder(7,8,divide);
calculateRemainder(5,3,exponential);

