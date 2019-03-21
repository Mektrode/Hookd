  var limitReached = false; //make reactive

  function setcurrent(newnum) {
    document.getElementById("currentnumber").innerHTML = newnum;
  }
  
  function checkcurrent () {
    return document.getElementById("currentnumber").innerHTML;
  }

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

  var end = function() {
    document.getElementById("game").style.visibility = "hidden";
  };

  var start = function() {
    newTarget = getRandomNum(2, 999999);
    //document.getElementById("target").innerHTML = newTarget;

    //set default current number as 3
    setcurrent(2);

    //Show Game Panel
    showPanel();
  };

  //For the future, will make a variable called gameOver set as either true or false
  //The make a funtion that returns the opposite
  //And a watcher so that if ever the state of the gameOver changes, the UI renders automatically

  var gameOverFunc = function(bool) {
    if (bool) {
        document.getElementById("gameOver").style.visibility = "visible";
    }
    if(!bool){
        document.getElementById("gameOver").style.visibility = "hidden";
    }
  };

  var reset = function() {
    //reset number to 3
    setcurrent(3);
    gameOverFunc(false);
  };
  
  var closeIt = function() {
    reset();
    end();
  };


  var checknewnumber = function(latestNum) {

    roundednum = rndtoInt(latestNum);

    setcurrent(roundednum);

    if (latestNum > 1000000) {
        gameOverFunc(true);
    }
  };

  var switchLogic = function(key, toSwitch) {
    let numbernow = toSwitch;

    console.log("toSwitch is " + toSwitch);

    if(numbernow === undefined) {
        /* what is the difference between:-
        1) let numbernow = checkcurrent();
        2) return numbernow = checkcurrent();
        3) numbernow = checkcurrent();
        renders 3 different results.
        */
        numbernow = checkcurrent();
        console.log("toSwitch parameter now defined to current number of " + numbernow);
    }
    switch (key) {
      case 1:
        numbernow++;
        checknewnumber(numbernow);
        return numbernow;
      case 2:
        numbernow--;
        checknewnumber(numbernow);
        return numbernow;
      case 3:
        numbernow = numbernow * 2;
        checknewnumber(numbernow);
        return numbernow;
      case 4:
        numbernow = numbernow / 2;
        checknewnumber(numbernow);
        return numbernow;
      case 5:
        numbernow = Math.pow(numbernow, 2);
        checknewnumber(numbernow);
        return numbernow;
      case 6:
        numbernow = Math.pow(numbernow, 1 / 2);
        checknewnumber(numbernow);
        return numbernow;
      default:
        console.log("Error!!!");
    }
  };
  console.log("End of code.")

  //To be able to test the switch i had to detach it from a set variable and had to make it two way.