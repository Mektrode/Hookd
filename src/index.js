
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

    var closePanel = function() {
        document.getElementById("game").style.visibility = "hidden";
    };

    //Users starting number
    let startnum = 2;

    //Users timer
    let currentTime = 60;

    let timerOn = false;

    //return duration of time lapsed
    //should I make 60 a set variable and timenow a changing variable?
    function duration(timenow) {
        return 60 - timenow
    }

    //Target Number
    let target = 1000000

    function checkAcc(input){
        accRatio = input/target
        accuracy = accRatio * 100
        roundedAcc = rndtoInt(accuracy)
        return roundedAcc + "%"
    }

    function addHighScore(){
        console.log("Score: " + checkcurrent() + ". Accuracy: " +  checkAcc(checkcurrent())+ ". Time: " + duration(currentTime) + " seconds")
        
        var domFragment = document.createDocumentFragment();
        var newscoreRow = document.createElement("TR");
        domFragment.appendChild(newscoreRow)
        
        newscoreDataScore = document.createElement("TD");
        newscoreDataScoreInput = document.createTextNode(checkcurrent());
        newscoreDataScore.appendChild(newscoreDataScoreInput);
        
        newscoreDataAcc = document.createElement("TD");
        newscoreDataAccInput = document.createTextNode(checkAcc(checkcurrent()))
        newscoreDataAcc.appendChild(newscoreDataAccInput)

        newscoreDataTime = document.createElement("TD");
        newscoreDataTimeInput = document.createTextNode(duration(currentTime))
        newscoreDataTime.appendChild(newscoreDataTimeInput)
        
        newscoreRow.appendChild(newscoreDataScore) 
        newscoreRow.appendChild(newscoreDataAcc)
        newscoreRow.appendChild(newscoreDataTime)
        
        document.getElementById("scores").appendChild(newscoreRow);
        
    }

    var timedown
    function countdown(){
        timedown = setInterval(function() {
            if (timerOn){
                currentTime = currentTime - 1;
                document.getElementById("timer").innerHTML = currentTime
            }

            if (currentTime === 0) {
                switchTimer(false)
                gameOverFunc(true);
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

        if (timerOn){
            alert("Timer is already running. Press Reset Your Progress to restart!")
        }
        else if (!timerOn){
            switchTimer(true);
            countdown();
            gameOverFunc(false);
        }

        showPanel();
    };

    //For the future, will make a variable called gameOver set as either true or false
    //The make a funtion that returns the opposite
    //And a watcher so that if ever the state of the gameOver changes, the UI renders automatically

    var gameOverFunc = function(bool) {
        if (bool) {
            document.getElementById("gameOver").style.visibility = "visible";
            // saveScore() which should save to highscores object
            alert("Your score before the game ended was " + checkcurrent() + " in " + duration(currentTime) + " seconds")
            addHighScore();
            closeIt();
        }
        if(!bool){
            document.getElementById("gameOver").style.visibility = "hidden";
        }
    };

    var clearIt = function () {
        setcurrent(startnum);
        gameOverFunc(false);
        switchTimer(false);
    }

    var reset = function() {
        clearIt();
        //start timer again after everything is cleared
        switchTimer(true);
        countdown();
    };
    
    var closeIt = function() {
        clearIt();
        closePanel();
    };


    var checknewnumber = function(latestNum) {
        roundednum = rndtoInt(latestNum);
        setcurrent(roundednum);
        if (latestNum > target) {
            gameOverFunc(true);
        }
    };

    var switchLogic = function(key, toSwitch) {
    
        let numbernow = toSwitch;

        /*if (!timerOn){
            switchTimer(true);
        }*/

        if(numbernow === undefined) {
            /* what is the difference between:-
            1) let numbernow = checkcurrent();
            2) return numbernow = checkcurrent();
            3) numbernow = checkcurrent();
            renders 3 different results.
            */
            if (isNaN(checkcurrent())){
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
  