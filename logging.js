
// write a program such that when num is greater than range, 
// a boolean value or out of range will be returned by the listener


const EventEmitter = require("events");
const logging = new EventEmitter();
const numbers = [2, 5, 7, 8]

                        // we iterated through the loop here
logging.on(numbers, () => {for (var i = 0; i < numbers.length; i++) if (numbers[i] <= 5) {
    console.log(numbers[i] <= 5)
} else {
    console.log("out of range")
}})

console.log(numbers)
logging.emit(numbers)

