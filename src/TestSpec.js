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

        function testRnd(passRandom){
            const randomTest = getRandomNum (2, 10)
            
            if (randomTest > 1 || randomTest < 11) {
                return passRandom = true;
            }
        }
        expect(testRnd()).toEqual(true);
    });
});