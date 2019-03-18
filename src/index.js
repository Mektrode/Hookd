  var limitReached = false; //make reactive

  var currentnum = 0;

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function rndtoInt(rndNum) {
    return Math.round(rndNum);
  }

  var showPanel = function() {
    document.getElementById("game").style.visibility = "visible";
  };

  var start = function() {
    newTarget = getRandomNum(2, 999999);
    document.getElementById("target").innerHTML = newTarget;
    //Show user's current number
    document.getElementById("currentnumber").innerHTML = currentnum;

    //Show Game Panel
    showPanel();
  };

  var gameOverFunc = function(bool) {
    if (bool) {
        document.getElementById("gameOver").style.visibility = "visible";
    }
    if(!bool){
        document.getElementById("gameOver").style.visibility = "hidden";
    }
  };


  var reset = function() {
    currentnum = 0;
    document.getElementById("currentnumber").innerHTML = currentnum;
    console.log("reset executed!!!");
    gameOverFunc(false);
  };
  
  var closeIt = function() {
    reset();
    end();
  };

  var end = function() {
    document.getElementById("game").style.visibility = "hidden";
  };

  var checkNumber = function(latestNum) {
    console.log("your number is " + latestNum);
    roundednum = rndtoInt(latestNum);
    console.log("rounded is " + roundednum);
    document.getElementById("currentnumber").innerHTML = roundednum;

    if (latestNum > 1000000) {
        gameOverFunc(true);
    }
  };

  var switchLogic = function(one) {
    switch (one) {
      case 2:
        currentnum--;
        checkNumber(currentnum);
        break;
      case 1:
        currentnum++;
        checkNumber(currentnum);
        break;
      case 3:
        currentnum = currentnum * 2;
        checkNumber(currentnum);
        break;
      case 4:
        currentnum = currentnum / 2;
        checkNumber(currentnum);
        break;
      case 5:
        currentnum = Math.pow(currentnum, 2);
        checkNumber(currentnum);
        break;
      case 6:
        currentnum = Math.pow(currentnum, 1 / 2);
        checkNumber(currentnum);
        break;
      default:
        console.log("Error!!!");
    }
  };
  console.log("End of code.")