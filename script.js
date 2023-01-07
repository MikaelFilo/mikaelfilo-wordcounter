var countTarget = document.querySelector("#word-count-input");
var wordCount = document.querySelector("#word-count");
var characterCount = document.querySelector("#character-count");

var count = function () {
	var characters = countTarget.value;
	var characterLength = characters.length;
	var words = characters.split(/[\n\r\s]+/g).filter(function (word) {
		return word.length > 0;
	});

	wordCount.innerHTML = words.length;
	characterCount.innerHTML = characterLength;
};

count();
window.addEventListener(
	"input",
	function (e) {
		if (event.target.matches("#word-count-input")) {
			count();
		}
	},
	false
);

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
