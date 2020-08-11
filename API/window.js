//Declare global variable.
const name = 'Kuddus';
//Local
function add(num1, num2) {
    const result = num1 + num2;
    //access inside function 
    console.log('Result Inside'+ ' '+ name);
    function double(num) {
        return num * num;
    }
    const total = double(result);
    return result;
}
//access outside function
console.log('Result Outside' + ' ' + name);
const sum = add(20,50);
console.log(sum);