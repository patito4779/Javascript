const boughtEgg = true;
const boughtApple = true;


function studentEating() {
    return new Promise((res, rej) => {
        if (boughtEgg) {
            res({
                name: "student bought eggs",
                message: "student likes proteins"
            })
        } else if (boughtApple) {
            res({
                name: "student bought Apple",
                message: "students like fruits"

            })
        } else {
            rej("student is a vegetarian")
        }
    }) 
}

studentEating().then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(`error.name error.message`)
})


// build a promises app to return choice of food

/*const boughtApples = true;
const boughtEggs = false

function choiceOfFood() {
    return new Promise((res, rej) => {
        if (boughtApples) {
            res({
                name: "i bought apples",
                message: "i like fruits"

            } )
        } else if (boughtEggs) {
            res({
                name: "i bought eggs",
                message: "i like proteins"
            })
        } else {
            rej("I am a vegetarian")
        }
    })
}

choiceOfFood().then((message) => {console.log(`${message}`)
}).catch((error) => {
    console.log(`console.error console.name`)
}) */