const numbers = [1,2,3];

function addNumbers() {
    const newNumbers = [].concat(numbers);
    const i = newNumbers[newNumbers.length - 1] + 1;
    const next = i + 10;
    for (let index = i ; index < next; index++) {
        newNumbers.push(index)
    }
    return newNumbers;
}



// function loop() {
//   for (let i = 0; i < 100; i++) {
//     var name = 'hello'
//   }

//   console.log(name);
// }

 
