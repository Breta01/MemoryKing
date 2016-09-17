import { addStats } from '../actions/actionCreators';
import store from '../store';


const gameNumbers = (function() {
    var num = {};
    var generatedNumbers = [];
    var userNumbers = [];
    var state = 0;
	var line = 20;
    var button;

    // Generate random number
    function getRandom(max = 9) {
        return Math.floor(Math.random() * (max + 1));
    }

	// Initializing the variables
    num.start = function(time, line=20) {
        console.log("starting numbers!")
        generatedNumbers = [];
        userNumbers = [];
        state = 0;
        button = document.getElementById("gameSubmit");
        var print = "";
		for (var r=0; r < 10; r++) {
			print += "<tr>";
        	for (var i=0; i < line; i++) {
        	    var rnd = getRandom();
        	    generatedNumbers.push(rnd);
        	    print += "<td>" + rnd + "</td>";
        	}
			print += "</tr>";
		}
        console.log(generatedNumbers);
        document.getElementById("gameTable").innerHTML = print;
        button.addEventListener("click", function () {
            num.changeState();
        });
    };

	// Correcting the user input
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

	// Swithing state from numbers learning to user value inputing
    num.changeState = function() {
        console.log("Changing state");
        if (state === 0) {
            state++;
            var render = "";
			for (var r=0; r < generatedNumbers.length / line; r++) {
				render += "<tr>";
				for (var i=0; i < line; i++) {
					// @TODO add max input size and automatic tabing, check this: http://autotab.mathachew.com/
					render += "<td class='quantity' style='width: " + 100/line + "%;'><input type='number' name='numberInput' size='1'></td>";
				}
				render += "</tr>";
			}
            document.getElementById("gameTable").innerHTML = render;
			button.innerHTML = "Submit";

        } else if (state === 1) {
            state++;
            // I will instantly redirect to the Dashboard without timeout
            setTimeout(function(){
                button.innerHTML = 'Back to Dashboard';
                button.href = "#/";
            }, 20);

            num.correct();

        }
    };

	// Uploading score to the database using Redux action
    num.sendScore = function(score) {
        var stat = {
            game: "Numbers",
            score: score
        };
		store.dispatch(addStats(stat));
    };

    return num;
}());

export default gameNumbers;
