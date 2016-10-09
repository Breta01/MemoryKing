import { addStats } from '../actions/actionCreators';
import store from '../store';


const gameNumbers = (function() {
	var num = {};

	var generatedNumbers = [];
	var userNumbers = [];

	// @TODO should be initialized on start
	var state = 0;
	var line = 20;
	var maxLength = 1;
	var memTime = 5; // In minutes
	var recTime = 5;

	// Score
	var userScore;
	var userTime = -1; // If not timed, set to -1
	var userCorrect;
	var userMistakes;

	var ms;
	var timer;
	var button;
	var actualNumber;
	var id = 1;
	var focus = "focus";

	// Generate random number
	function getRandom(max = 10) {
		return Math.floor(Math.random() * (max));
	};

	// Timer
	num.startTimer = function(maxTime) {
		console.log("Timer");
		ms = 0;
		var timestamp = +new Date;
		var pad = function (val) {
			return val > 9 ? val : "0" + val;
		}

		timer = setInterval(function () {
			var now = +new Date;
			var diff = now - timestamp;
			ms += diff;
			document.getElementById("hsec").innerHTML = pad(parseInt(ms/10 % 100));
			document.getElementById("sec").innerHTML = pad(parseInt(ms / 1000 % 60, 10));
			document.getElementById("min").innerHTML = pad(parseInt(ms / 60000 % 60, 10));
			document.getElementById("hour").innerHTML = (ms > 3600000) ? pad(parseInt(ms / 3600000 % 60, 10)) + "&nbsp;" : "";

			// When the user run out of time
			if (ms / 60000  >= maxTime) {
				num.changeState();
				console.log("Time to recall");
			}

			timestamp = now;

		}, 10);
	};

	// Remove timer - when user leave or end
	num.removeTimer = function() {
		clearInterval(timer);
	};

	// Initializing the variables
	num.start = function(time, line=20) {
		console.log("starting numbers!"); // @DEBUG

		generatedNumbers = [];
		userNumbers = [];
		state = 0;
		id = 1;
		button = document.getElementById("gameSubmit");
		actualNumber = document.getElementById("actualNumber");

		num.removeTimer();
		num.startTimer(memTime);
		var print = "";

		for (var r=0; r < 10; r++) {
			print += "<tr>";
			for (var i=0; i < line; i++) {
				var rnd = getRandom(Math.pow(10, maxLength));
				var rndNum = ("0000000000" + rnd).slice(-maxLength);
				generatedNumbers.push(rndNum); // generatedNumbers are actually string ;)
				print += "<td id='" + ((r*line)+i+1) + "'>" + rndNum + "</td>";
			}
			print += "</tr>";
		}

		document.getElementById("gameTable").innerHTML = print;
		document.getElementById("1").classList.add(focus);

		actualNumber.innerHTML = generatedNumbers[0];
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

		var correct = 0;
		var mistakes = 0;
		var bMistakes = 0;

		for (var i = 0; i < userNumbers.length; i++) {
			// Have to check each digit
			for (var j = 0; j < maxLength; j++) {
				if (String(userNumbers[i]).charAt(j) == generatedNumbers[i].charAt(j) &&
					String(userNumbers[i]).charAt(j) !== "") {
					correct++;
					mistakes += bMistakes;
					bMistakes = 0;
				} else if (String(userNumbers[i]).charAt(j) !== "") {
					mistakes++;
					mistakes += bMistakes;
					bMistakes = 0;
				} else {
					bMistakes++;
				}
			}
		}

		// Score formula
		userScore = Math.round(correct * 2 + (memTime) / (userTime / 60000) ^ 0.75 - mistakes * 0.3);
		userMistakes = mistakes;
		userCorrect = correct;

		num.sendScore(userScore);
	};


	// Swithing state from numbers learning to user value inputing
	num.changeState = function() {

		if (state === 0) {

			state++;
			id = 1;
			userTime = ms;

			var render = "";
			for (var r=0; r < generatedNumbers.length / line; r++) {
				render += "<tr>";
				for (var i=0; i < line; i++) {
					render += "<td class='quantity' style='width: " + 100/line
						+ "%;'><input type='number' onClick='this.select()' name='numberInput' size='1' id='"
						+ ((line*r)+i+1) + "'></td>";
				}
				render += "</tr>";
			}

			document.getElementById("gameTable").innerHTML = render;
			document.getElementById("1").focus();

			actualNumber.remove();
			num.removeTimer();
			num.startTimer(recTime);

			button.innerHTML = "Submit";

		} else if (state === 1) {
			state++;
			num.removeTimer();
			document.getElementById("timer").remove();

			// It will instantly redirect to the Dashboard without timeout
			setTimeout(function(){
				button.innerHTML = 'Back to Dashboard';
				button.href = "#/";
			}, 20);

			num.correct();

			// Showing stats
			document.getElementById("gameContent").innerHTML = "Correct: " + userCorrect
			+ " Mistakes: " + userMistakes
			+ "</br> Score: " + userScore;
		}
	};


	// Changing focus on elements on key press
	var update = function (add = 1) {
		document.getElementById('' + id).classList.remove(focus);
		id += add;
		document.getElementById('' + id).classList.add(focus);
	};


	num.changeFocus = function(e) {
		// Use atually focused element
		var focused = document.activeElement.id;
		if (focused) {
			id = parseInt(focused);
		}

		var add = 1;
		var key = false;
		var isUpDown = false;
		switch(e.keyCode) {
			case 37:  // Left arr
				add = -1;
				key = true;
				break;
			case 38:  // Top arr
				add = -line;
				isUpDown = true;
				break;
			case 39:  // Right arr
				add = 1;
				key = true;
				break;
			case 40:  // Down arr
				add = line;
				isUpDown = true;
				break;
			case 13:  // Enter
				// @TODO ask if he really want to finish
				num.changeState();
				break;
			default:
				add = 1
				break;
		}

		if (id+add <= generatedNumbers.length &&
			id+add >=1) {
			if (state === 1 &&
				(
					document.getElementById('' + id).value.length >= maxLength &&
					!isUpDown ||
					key
				)) {

				update(add);
				document.getElementById('' + id).focus();
				document.getElementById('' + id).select();
			} else if (state === 0) {
				update(add);
				actualNumber.innerHTML = generatedNumbers[id-1];
			}
		}
	};


	// Uploading score to the database using Redux action
	num.sendScore = function() {
		var stat = {
			game: "Numbers",
			score: userScore,
			speed: userTime,
			correct: userCorrect,
			mistakes: userMistakes,
		};
		store.dispatch(addStats(stat));
	};

	return num;
}());

export default gameNumbers;
