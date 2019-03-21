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
    let testnum = 7;
/*
    it("should change undefined to current DOM number which is set as 1 then add 1 to make it 2", () => {

        let testresultt = switchLogic(1, undefined);
        console.log("Now undef Test === " + testresultt)

        expect(testresultt).toEqual(2);
    })
*/
    it("should double", () => {
        let testresultt = switchLogic(3, testnum);
        console.log("Now currentnum is " + testnum)
        expect(testresultt).toEqual(testnum * 2);
    })
    it("should half", () => {
        let testresultt = switchLogic(4, testnum);
        expect(testresultt).toEqual(testnum / 2);
    })
    it("should add 1", () => {
        let testresultt = switchLogic(1, testnum);
        expect(testresultt).toEqual(testnum + 1);
    })
    it("should subtract 1", () => {
        let testresultt = switchLogic(2, testnum);
        expect(testresultt).toEqual(testnum - 1);
    })
    it("should square", () => {
        let testresultt = switchLogic(5, testnum);
        expect(testresultt).toEqual(Math.pow(testnum, 2));
    })
    it("should square root", () => {
        let testresultt = switchLogic(6, testnum);
        expect(testresultt).toEqual(Math.pow(testnum, 1/2));
    })

});

//Notes:-

//Make currentnum independant of switch
//always have return as last thing in a function
//return only a variable, not instructions
//check index.js line 82 comment
//all tests run before user presses start() & start() sets currentnumber to 2
//therefore all tests do not interfere with DOM