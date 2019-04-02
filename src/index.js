
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

    /*
    DOM MANIPULATION FUNCTIONS
    */
   
    function setcurrent(newnum) {
        document.getElementById("currentnumber").innerHTML = newnum;
    }

    var toggleStartGameBtn = function(gameBtn = false){
        if (gameBtn) {
            document.getElementById("startGameBtn").style.visibility = "visible";
        }
        else if (!gameBtn){
            document.getElementById("startGameBtn").style.visibility = "hidden";
        }
        else {
            console.log("Error on toggleGamePanel");
        }
    }

    var toggleGameDetailsPanel = function (on=false) {
        if(on){
            document.getElementById("gameDetails").style.visibility = "visible";
        }
        else if(!on) {
            document.getElementById("gameDetails").style.visibility = "hidden";
        }
        else {
            alert("Error toggleGameDetailsPanel()")
        }
    }

    var toggleTimer = function(on = false){
        if(on){
            state.currentTime = 60
            document.getElementById("timer").innerHTML = state.currentTime
            return state.timerOn = true
        }
        else if (!on){
            clearInterval(timedown);  
            state.currentTime = 0;
            document.getElementById("timer").innerHTML = state.currentTime
            return state.timerOn = false
        }
        else {
            console.log("Error with toggleTimer()")
        }
    }

    var toggleGameOver = function(on = false) {
        if (on) {
            document.getElementById("gameOver").style.visibility = "visible";
            // saveScore() which should save to highscores object
            alert("Saved Your Score which was " + checkcurrent() + " in " + duration(state.currentTime) + " seconds")
            addHighScore();
            closeIt();
        }
        else if(!on){
            document.getElementById("gameOver").style.visibility = "hidden";
        }
        else {
            console.log("Error toggleGameOver()")
        }
    };
    

    var hideUserNamePanel = function(){
        document.getElementById("uNameDiv").style.visibility = "hidden";
    }

    function checkcurrent () {
        //CHANGE THIS TO READ ONLY FROM THE STATE AND NOT FROM THE DOM
        return document.getElementById("currentnumber").innerHTML;
    }

    /*
    MATH RETURN FUNCTIONS
    */

    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    function rndtoInt(rndNum) {
        return Math.round(rndNum);
    }
    
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

    var checkUser = function() {
        userPicked = document.getElementById("usernameChosen").value
        if (userPicked) {
            state.username = userPicked
            start();
        }
        else {
            start()
        }
    }

    //return duration of time lapsed
    //should I make 60 a set variable and timenow a changing variable?
    
    /*
    DOM INJECTION
    */
    
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

    /*
    TIMER
    */

    var timedown
    function countdown(){
        timedown = setInterval(function() {
            if (state.timerOn){
                state.currentTime = state.currentTime - 1;
                document.getElementById("timer").innerHTML = state.currentTime
            }

            if (state.currentTime === 0) {
                toggleTimer(false)
                toggleGameOver(true);
            }
        }, 1000)
    }

    var start = function() {
        state.target = getRandomNum(2, 999999);
        
        document.getElementById("target").innerHTML = state.target;
        
        setcurrent(state.startnum);

        if (state.timerOn){
            alert("Timer is already running. Press Reset Your Progress to restart!")
        }
        else if (!state.timerOn){
            toggleTimer(true);
            countdown();
            toggleGameOver(false);
        }

        hideUserNamePanel();
        toggleStartGameBtn(true);
        toggleGameDetailsPanel(true);
    };

    /*
    Application Logic (Uses DOM & Logic)
    */

    var clearPanel = function () {
        setcurrent(state.startnum);
        toggleGameOver(false);
        toggleTimer(false);
    }

    var reset = function() {
        clearPanel();
        //start timer again after everything is cleared
        toggleTimer(true);
        countdown();
    };
    
    var closeIt = function() {
        clearPanel();
        toggleGameDetailsPanel(false);
    };

    var checknewnumber = function(latestNum) {
        roundednum = rndtoInt(latestNum);
        if (latestNum > 1000000000) {
            toggleGameOver(true);
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
  