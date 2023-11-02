// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArray", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items", () => {
       const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
       expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))

       const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

       expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })   
})


// b) Create the function that makes the test pass.

// Pseudo code:
// - create a function called shuffleArray
// - input: array
// - output: shuffled array with the first item removed
    // create a new variable that removes the first element with the .shift() method 
    // use the .sort() and the Math.random together to sort a random order
    //  return the sorted array without the first element 

    const shuffleArray = (arr) => {
        let removeFirst = arr.shift()
        return arr.sort(() => Math.random() - 0.5)
    }


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

    describe("tallyVotes", () => {
        it("takes in an object that contains up votes and down votes and returns the end tally", () => {
            const votes1 = { upVotes: 13, downVotes: 2 }
            // Expected output: 11
            const votes2 = { upVotes: 2, downVotes: 33 }
            // Expected output: -31

            expect(tallyVotes(votes1.upVotes, votes1.downVotes)).toEqual(11)
            expect(tallyVotes(votes2.upVotes, votes2.downVotes)).toEqual(-31) 
        })
    })


// b) Create the function that makes the test pass.

// Pseudo code:
// - create a function named tallyVotes
// - input: object with two number values 
// - output: returns the end tally
    // use a math operator to subtract the values and
    // return the tally
     

    const tallyVotes = (up, down) => {
        return up - down 
    }

