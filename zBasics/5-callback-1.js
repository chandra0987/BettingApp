function add(num) {
    return num
}

function multiply(functionasparameter,a){ // Function Defination
    console.log(functionasparameter(2)*a) // 2*1 2*2 2*3 2*4   //functionasparameter = add
    return functionasparameter(2)*a
}

multiply(add, 1) // Calling a function
multiply(add, 2)
multiply(add, 3)
multiply(add, 4)
multiply(add, 5)

// Function that is passed as an argument to another function

