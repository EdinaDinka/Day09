function myFunction(myParameter) {
    if (myParameter) {
        myParameter = "My parameter is true!";
        return myParameter;
    }
    myParameter = "My parameter is false!";
    return myParameter;
}
console.log(myFunction(true));
console.log(myFunction(false));
module.exports = myFunction;
