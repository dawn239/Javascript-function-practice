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