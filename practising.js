//check linking
console.log('check');

//basic function using both methods of writing

const addingNumbers = function(x, y) {
    const answer = x + y;
    return answer;
}

const addingNumbersArrow = (a, b) => {
    const arrowAnswer = a + b;
    return arrowAnswer;
}

//could simplify further to single line

const addingSingleLine = (c, d) => c + d;

//These are declarations, functions need called to work
console.log(addingNumbers(3, 6));
console.log(addingNumbersArrow(6, 4));
console.log(addingSingleLine(2, 7));

//helper function - one calls another
//calculate cost of flooring need to know size of room
const roomSize = (width, length) => {
    return width * length;
}

//need to do cost time m2, calling function here so ned to send parameters
const floorCost = function(cost) {
    return roomSize(4, 5)*cost;
}

console.log(floorCost(5)); //send the cost as parameter

//arrays with built in methods
const entrants = ['Millie', 'Joe', 'Sam', 'Jude', 'Rebecca', 'Katie', 'Andy', 'Jack', 'Mitchell', 'Jenny'];

entrants.push('Becky');
console.log(entrants);
console.log(entrants.length);

entrants.shift(); //removes first index and everything shifts up
console.log(entrants);
entrants.unshift('Tom');
console.log(entrants);
console.log(entrants.slice(2,7)); //gives section, 1st parameter inclusive, second exclusive, nonmutating

const joeIndex = entrants.indexOf('Joe'); //gives index of an element
console.log(joeIndex);

//functions on array
//function set up with parameter of array but not linked yet to specific array
const changeThirdElement = (arr) => {
    return arr[2] = 'Bob';
};

changeThirdElement(entrants); //calling function on specific array
console.log(entrants[2]); //should be changed to Bob

//nested array example
const friends = [['Katie', 'female', 23], ['Terry', 'male', 24], ['Peter', 'male', 43], ['Joan', 'female', 21],
['Kerry', 'female', 33], ['Mike', 'male', 42]];
console.log(friends[3][0]); //should be joan