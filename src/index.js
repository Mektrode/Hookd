    //import * as pubScore from 'highscores.js'
    //import * as calc from 'src/calculations.js'

    const state = {
        //Users starting number
        startnum : 2,

        //DOM will read this and logic will write to this variable
        currentNum : null,

        //Time Given
        timeGiven : 60,

        //DOM will read this and logic will write to this variable
        currentTime : null,

        //Is the countdown on?
        timerOn : false,

        //Target Number
        target : 100,

        accuracyState: null,

        //show username board
        chooseUser : true,

        //Is logged in? show specific users scores in special table if true
        loggedin: false,

        //default username
        username: "Guest"
    }

    //  TODO =>  create a highscores store
    const highscores = {
        scores: [
            {
                targetScore: 310183,
                nameOfPlayer: "Johnny",
                finalScore: 203398,
                //change application to make accuracy a number only and add % and s using JSX
                accuracy: "64%",
                timeTaken: "60s",
                date: "Thu 04 Apr 2019",
            },
            {
                targetScore: 710183,
                nameOfPlayer: "Hakim",
                finalScore: 403398,
                //change application to make accuracy a number only and add % and s using JSX
                accuracy: "57%",
                timeTaken: "60s",
                date: "Thu 04 Apr 2019",
            },
        ]
    }

    /*
    DOM MANIPULATION FUNCTIONS
    */
    
    function setcurrent() {
        document.getElementById("currentnumber").innerHTML = state.currentNum;
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
            state.currentTime = state.timeGiven
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
            compileScore();
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

    function checkUser(){
        return document.getElementById("usernameChosen").value
    }

    function checkcurrent () {
        return state.currentNum;
    }

    /*
    MATH RETURN FUNCTIONS
    */

    //Return a random number between min & max
    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    //Return round to nearest whole number
    function rndtoInt(rndNum) {
        return Math.round(rndNum);
    }

    //Round to 2 dp
    function rndTo2dp(rndNum){
        return Math.round(rndNum * 100) / 100
    }

    function rndDownInt(toRnd) {
        return Math.floor(toRnd)
    }

    function updateAccuracy (newAcc) {
        state.accuracyState = rndTo2dp(newAcc);
    }

    //return duration of time lapsed
    function duration(timenow) {
        timeduration = state.timeGiven - timenow
        return timeduration + "s"
    }

    //Check accuracy of final score and return % of accuracy
    function checkAcc(input){
        accRatio = input/state.target
        updateAccuracy(accRatio);
        accuracy = accRatio * 100
        roundedAcc = rndDownInt(accuracy)
        return roundedAcc + "%"
    }
    
    //Set user for game session. 
    var setUser = function() {
        //If user is inputed overwrite state.username from Guest to the chosen username.
        if (checkUser()) {
            state.username = checkUser()
            start();
        }
        //Else start() with Guest as default.
        else {
            start()
        }
    }


    /*
    DOM INJECTION
    */
    
    /*
    function addHighScore(){
        console.log("Your username: " + state.username + " and your score is " + checkcurrent() + ". Thus your accuracy is: " +  checkAcc(checkcurrent()) + ". Time: " + duration(state.currentTime) + " seconds")
        
        newScore = {
            targetScore: state.target,
            nameOfPlayer: state.username,
            finalScore: state.currentNum,
            accuracy: checkAcc(checkcurrent()),
            accuracyState: state.accuracyState,
            timeTaken: duration(state.currentTime),
            date: new Date().toDateString(),
        }

        console.log("The object is")
        console.log(newScore)
        highscores.scores.push(newScore)

        console.log("The total highscores objects are")
        console.log(highscores.scores)
        //clear the state

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
        
    }*/

    var compileScore = function(){
        newScore = {
            targetScore: state.target,
            nameOfPlayer: state.username,
            finalScore: state.currentNum,
            accuracy: checkAcc(checkcurrent()),
            timeTaken: duration(state.currentTime),
            date: new Date().toDateString(),
        }
        addHighScore(newScore)
    }

    function addHighScore(arg){
        console.log("Before: Object recieved as Argument === Your username: " + arg.nameOfPlayer); //+ " and your score is " + checkcurrent() + ". Thus your accuracy is: " +  checkAcc(checkcurrent()) + ". Time: " + duration(state.currentTime) + " seconds")
        console.log("Date registered is " + arg.date)
        /*
        newScore = {
            targetScore: state.target,
            nameOfPlayer: state.username,
            finalScore: state.currentNum,
            accuracy: checkAcc(checkcurrent()),
            timeTaken: duration(state.currentTime),
            date: new Date().toDateString(),
        }
        */
    
        console.log("The object is")
        console.log(arg)
        highscores.scores.push(arg)
    
        console.log("The total highscores objects are")
        console.log(highscores.scores)
    
        //clear the state
        
        refreshScores();
    }
    
    function refreshScores(){
        const anotherScore = highscores.scores.map(score => {
            addNewScoreToDOM(score)
        })
    }

    function addNewScoreToDOM (arg) {
        var domFragment = document.createDocumentFragment();
        var newscoreRow = document.createElement("TR");
        domFragment.appendChild(newscoreRow)
        
        newscoreDataUsername = document.createElement("TD");
        newscoreDataUsernameInput = document.createTextNode(arg.nameOfPlayer);
        newscoreDataUsername.appendChild(newscoreDataUsernameInput);
        
        newscoreDataAcc = document.createElement("TD");
        newscoreDataAccInput = document.createTextNode(arg.accuracy)
        newscoreDataAcc.appendChild(newscoreDataAccInput)
    
        newscoreDataTime = document.createElement("TD");
        newscoreDataTimeInput = document.createTextNode(arg.timeTaken)
        newscoreDataTime.appendChild(newscoreDataTimeInput)
        
        /*
        Add new TD for more comprehesive stuff
        */
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
        
        state.currentNum = state.startnum;
        setcurrent();

        if (state.timerOn){
            alert("Timer is already running. Press Reset Your Progress to restart!")
        }
        else if (!state.timerOn){
            toggleTimer(true);
            countdown();
            toggleGameOver(false);
        }

        hideUserNamePanel();
        refreshScores();
        toggleStartGameBtn(true);
        toggleGameDetailsPanel(true);
    };

    /*
    Application Logic (Uses DOM & Logic)
    */

    var clearPanel = function () {
        state.currentNum = state.startnum;
        setcurrent();
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
            state.currentNum = roundednum;
            setcurrent();
        }
        else {
            state.currentNum = roundednum;
            setcurrent();
        }
    };

    var switchLogic = function(key, toSwitch=7) {
        
        let numbernow = checkcurrent();
        /*
        if(numbernow === undefined) {
            /* what is the difference between:-
            1) let numbernow = checkcurrent();
            2) return numbernow = checkcurrent();
            3) numbernow = checkcurrent();
            renders 3 different results.
            
            if (isNaN(checkcurrent())){
                setcurrent(1);
                numbernow = checkcurrent();
            }
            else {
                numbernow = checkcurrent();
            }
        }
        */
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
                //Add IF square increases over the limit Disable this action
                checknewnumber(numbernow);
                return numbernow;
            case 6:
                numbernow = Math.pow(numbernow, 1 / 2);
                checknewnumber(numbernow);
                return numbernow;
            case 7:
                numbernow = numbernow - 1000;
                checknewnumber(numbernow);
                return numbernow;
            case 8:
                numbernow = numbernow + 1000;
                checknewnumber(numbernow);
                return numbernow;
            case 9:
                numbernow = numbernow - 10000;
                checknewnumber(numbernow);
                return numbernow;
            case 10:
                numbernow = numbernow + 10000;
                checknewnumber(numbernow);
                return numbernow;
            default:
                console.log("Error!!!");
        }
  };
  