
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

    //Start at 2
    let startnum = 2;

    let currentTime = 60;

    let timerOn = false;

    /*
    function startTimer(){
        console.log("current time begin at " + currentTime)
        currentTime = currentTime - 1;
        console.log("current time NOW at " + currentTime)
        document.getElementById("timer").innerHTML = currentTime
        return currentTime
    }
    */

    var timedown
    function countdown(){
        timedown = setInterval(function() {
            if (timerOn){
                console.log("current time begin at " + currentTime)
                currentTime = currentTime - 1;
                console.log("current time NOW at " + currentTime)
                document.getElementById("timer").innerHTML = currentTime
            }

            if (currentTime === 0) {
                switchTimer(false)  
            }
        }, 1000)
    }
    function switchTimer(bool){
        if(bool){
            currentTime = 60
            document.getElementById("timer").innerHTML = currentTime
            return timerOn = true
        }
        else if (!bool){
            clearInterval(timedown);  
            currentTime = 0;
            document.getElementById("timer").innerHTML = currentTime
            return timerOn = false
        }
    }

    var start = function() {
        newTarget = getRandomNum(2, 999999);
        /*
        No longer used:-
        document.getElementById("target").innerHTML = newTarget;
        */
        setcurrent(startnum);

        switchTimer(true);
        countdown();

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
        setcurrent(startnum);
        gameOverFunc(false);
        switchTimer(false);
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

    if(numbernow === undefined) {
        /* what is the difference between:-
        1) let numbernow = checkcurrent();
        2) return numbernow = checkcurrent();
        3) numbernow = checkcurrent();
        renders 3 different results.
        */
       let checkcurrent2 = checkcurrent()
       if (isNaN(checkcurrent2)){
            setcurrent(1);
           numbernow = checkcurrent();
       }
       else {
            numbernow = checkcurrent();
       }
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
  