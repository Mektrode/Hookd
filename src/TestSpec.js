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

describe("Testing the rndtoInt function", () => {
    it("round float to nearest integer", () => {
        expect(rndtoInt(8.33211)).toEqual(8);
    });
});