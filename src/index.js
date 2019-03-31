
    const state = {
        //Users starting number
        startnum : 2,

        //Users timer
        currentTime : 60,

        //Is the countdown on?
        timerOn : false,

        //Target Number
        target : 100,

        //show username board
        chooseUser : true,

        //Is logged in? show specific users scores in special table if true
        loggedin: false,

        //default username
        username: "Guest"
    }

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

    //return duration of time lapsed
    //should I make 60 a set variable and timenow a changing variable?
    function duration(timenow) {
        timeduration = 60 - timenow
        return timeduration + "s"
    }
    
    function checkAcc(input){
        accRatio = input/state.target
        accuracy = accRatio * 100
        roundedAcc = rndtoInt(accuracy)
        return roundedAcc + "%"
    }

    function addHighScore(){
        console.log("Your username: " + state.username + " and your score is " + checkcurrent() + ". Thus your accuracy is: " +  checkAcc(checkcurrent())+ ". Time: " + duration(state.currentTime) + " seconds")
        
        var domFragment = document.createDocumentFragment();
        var newscoreRow = document.createElement("TR");
        domFragment.appendChild(newscoreRow)
        
        newscoreDataUsername = document.createElement("TD");
        newscoreDataUsernameInput = document.createTextNode(state.username);
        newscoreDataUsername.appendChild(newscoreDataUsernameInput);
        
        newscoreDataAcc = document.createElement("TD");
        newscoreDataAccInput = document.createTextNode(checkAcc(checkcurrent()))
        newscoreDataAcc.appendChild(newscoreDataAccInput)

        newscoreDataTime = document.createElement("TD");
        newscoreDataTimeInput = document.createTextNode(duration(state.currentTime))
        newscoreDataTime.appendChild(newscoreDataTimeInput)
        
        newscoreRow.appendChild(newscoreDataUsername) 
        newscoreRow.appendChild(newscoreDataAcc)
        newscoreRow.appendChild(newscoreDataTime)
        
        document.getElementById("scores").appendChild(newscoreRow);
        
    }

    var timedown
    function countdown(){
        timedown = setInterval(function() {
            if (state.timerOn){
                state.currentTime = state.currentTime - 1;
                document.getElementById("timer").innerHTML = state.currentTime
            }

            if (state.currentTime === 0) {
                switchTimer(false)
                gameOverFunc(true);
            }
        }, 1000)
    }

    function switchTimer(bool){
        if(bool){
            state.currentTime = 60
            document.getElementById("timer").innerHTML = state.currentTime
            return state.timerOn = true
        }
        else if (!bool){
            clearInterval(timedown);  
            state.currentTime = 0;
            document.getElementById("timer").innerHTML = state.currentTime
            return state.timerOn = false
        }
    }

    var start = function() {
        state.target = getRandomNum(2, 999999);
        
        document.getElementById("target").innerHTML = state.target;
        
        setcurrent(state.startnum);

        if (state.timerOn){
            alert("Timer is already running. Press Reset Your Progress to restart!")
        }
        else if (!state.timerOn){
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
            alert("Saved Your Score which was " + checkcurrent() + " in " + duration(state.currentTime) + " seconds")
            addHighScore();
            closeIt();
        }
        if(!bool){
            document.getElementById("gameOver").style.visibility = "hidden";
        }
    };

    var clearIt = function () {
        setcurrent(state.startnum);
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
        if (latestNum > 1000000000) {
            gameOverFunc(true);
            console.log("WTH?!! You went over 1Billion!!!!")
        }
        else if (latestNum === state.target){
            alert("YOU WIN!!!!!!!!");
            setcurrent(roundednum);
        }
        else {
            setcurrent(roundednum);
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
  