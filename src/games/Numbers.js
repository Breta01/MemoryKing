const gameNumbers = (function() {
    var num = {};
    var generatedNumbers = [];
    var userNumbers = [];
    var state = 0;
    var button;

    // Generate random number
    function getRandom(max = 9) {
        return Math.floor(Math.random() * (max + 1));
    }

    num.start = function(time) {
        console.log("starting numbers!")
        generatedNumbers = [];
        userNumbers = [];
        state = 0;
        button = document.getElementById("gameSubmit");
        var print = "";
        for (var i=0; i < 10; i++) {
            var rnd = getRandom();
            generatedNumbers.push(rnd);
            print += rnd + " ";
        }
        console.log(generatedNumbers);
        document.getElementById("gameContent").innerHTML = print;
        button.addEventListener("click", function () {
            num.changeState();
        });
    };

    num.correct = function(remainingTime = 0) {
        var inputs = document.getElementsByName("numberInput");
        for (var i = 0; i < inputs.length; i++) {
            userNumbers.push(inputs[i].value);
        }
        console.log(userNumbers);

        var correct = 0;
        var mistakes = 0;

        for (var i = 0; i < userNumbers.length; i++) {
            if (userNumbers[i] == generatedNumbers[i] && userNumbers[i] !== "") {
                correct++;
            } else if (userNumbers[i] !== "") {
                mistakes++;
            }
        }

        var score = correct * 5;
        console.log("Correct: " + correct + " mistakes: " + mistakes);
        document.getElementById("gameContent").innerHTML = "Correct: " + correct + " mistakes: " + mistakes;
        num.sendScore(score);
    };

    num.changeState = function() {
        console.log("Changing state");
        if (state === 0) {
            var render = "";
            for (var i=0; i < generatedNumbers.length; i++) {
                // @TODO add max input size and automatic tabing, check this: http://autotab.mathachew.com/
                render += "<input type='number' name='numberInput' size='20'>";
            }
            document.getElementById("gameContent").innerHTML = render;
            state++;
        } else if (state === 1) {
            num.correct();
            state++;

            // I will instantly redirect to the Dashboard without timeout
            setTimeout(function(){
                button.innerHTML = 'Back to Dashboard';
                button.href = "#/";
            }, 50);

        }
    };

    num.sendScore = function(score) {
        console.log("Sending the results to database.");
    };

    return num;
}());

export default gameNumbers;
