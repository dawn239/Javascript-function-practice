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

//nested loops, checking arrays for matches
const ineligible = ['Millie', 'Jason', 'Sofie', 'Jude', 'Rachel', 'Kora', 'Andy', 'Kym'];
const disqualified = [];
for (let i = 0; i < entrants.length; i++) {
    for (let j = 0; j < ineligible.length; j++) {
        if (entrants[i]===ineligible[j]) {
            disqualified.push(entrants[i]);
        }
    }
}

console.log(disqualified); //only logs Jude and Andy as Millie was taken off during .shift

//generate two random numbers and run while look until they are matches

let counter1 = 5;
let counter2 = 0;

do {
    counter2 = Math.floor(Math.random()*6); //i broke this initially as I set it as 5 but that meant it never reached 5!!
    console.log(counter2);
} while (counter1 !== counter2);

//two numbers now I get it!!

let counter3 = 0
let counter4 = 1

while (counter3 !== counter4) {
    counter3 = Math.floor(Math.random()*10);
    counter4 = Math.floor(Math.random()*10);
    console.log(counter3, counter4);
}

//iterators for arrays, callback functions
const starSigns = ['Aquarius', 'Aries', 'Leo', 'Sagittarius', 'Taurus', 'Virgo', 'Capricorn', 'Gemini', 'Libra', 'Cancer', 'Scorpio', 'Pisces'];
starSigns.forEach(starSign => console.log(starSign + ' is a star sign')); //knows starSign is an element, could call it anything

//above is being decalred and called at the same time, could do separately, useful if wanting to reuse function
const capitalStarSigns = [];

    function capitaliseStarSign(arr) {
        arr.forEach(element => {
            capitalStarSigns.push(element.toUpperCase()); //pushing each element, could just have element is () but added function of capitalise
        });
    };


capitaliseStarSign(starSigns);
console.log(capitalStarSigns);

//.map would do same as above without need of pushing
const lowerStarSigns = capitalStarSigns.map(element => {
    return element.toLowerCase(); //.map needs return
})

console.log(lowerStarSigns);

const ageInTenYears = friends.map(element => {
    return element[2] + 10;
})

console.log(ageInTenYears);

//.filter return everything for which the condition is true
const aStarSigns = starSigns.filter(starSign => {
    return starSign[0]==='A';
});

console.log(aStarSigns);

//.reduce add all numbers
const randomNumbers = [2, 43, 5, 3, 10, 23];

const sumRandomNumbers = randomNumbers.reduce((x, z) => {
    return x + z;
})

console.log(sumRandomNumbers);

//.reduce also will add other types of variable
const secretCode = ['apple', 'pear', 'potato', 'yellow']

const result = secretCode.reduce((acc, currVal) => {
    return acc + currVal[0];
}, 'H');    //need to have starting value or will log whole first item which didn't want

console.log(result);

//find out if some or every part of array meets a condition
console.log(randomNumbers.every(num => num > 40)); //all numbers are not less than 40 so logs false
console.log(randomNumbers.some(num => num%5)); //some numbers are divisible by 5 so true