function myFunction(myParameter) {
    if (myParameter) {
        return "My parameter is true!";  
    }
    return "My parameter is false!";
}
console.log(myFunction(true));
console.log(myFunction(false));
module.exports = myFunction;
