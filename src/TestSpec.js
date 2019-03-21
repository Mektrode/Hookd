/*
  Tests:-
  => Check open game panel
  
  Set currentnum to 3, then test:- 
  => Check Add() & expect 4
  => Check Subtract() & expect 2
  => Check Double() & expect 6
  => Check Half() & expect 1.5 (rounded to 2 with log of original & new value)
  => Check SqrRoot() & expect 1.732... (rounded to 2 with log of original & new value)
  => Check Sqr() & expect 9
*/

describe("Test the one time functions", () => {
    it("round float to nearest integer", () => {
        expect(rndtoInt(8.33211)).toEqual(8);
    });
    it("Check for random number", () => {
        let passRandom = false
        const randomTest = getRandomNum (2, 10)

        function testRnd(testnum, passRandom){
            if (testnum > 1 && testnum < 11) {
                return passRandom = true;
            }
        }

        expect(testRnd(randomTest, passRandom)).toEqual(true);
    });
});

describe("Test the switches", () => {
    let testnum = 3;
    
    it("should double", () => {
        console.log("First testnum is " + testnum)
        let testresultt = switchLogic(3, testnum);
        console.log("Now currentnum is " + testnum)
        expect(testresultt).toEqual(6);
    })
});

//Notes:-

//Make currentnum independant of switch
//always have return as last thing in a function
//return only a variable, not instructions
//difference between 