//The Phrase Class that handles the creation of phrases.
class Phrase {
	constructor(phrase) { //The phrases' constructor that takes a string(phrase) as an argument.
		this.phrase = phrase.toLowerCase();
	}
	addPhraseToDisplay() { //This method add the phrase to be display as Li elements
		const lettersOfPhrase = [...this.phrase]; //It turns a phrase into an array of individual string
		const lettersUl = document.querySelector('ul');
		lettersOfPhrase.forEach(letter => { //Iterate and create an LI element for every individual string
			const lettersLi = document.createElement('li');
			if (letter !== ' ') {
				lettersLi.textContent = letter; //And uses the individual string as the textContent for the Li elements
				lettersLi.setAttribute('class', `hide letter ${letter}`);
			} else {
				lettersLi.textContent = '';
				lettersLi.setAttribute('class', 'space');
			}
			lettersUl.appendChild(lettersLi); // The append Li to the UL element
		});
	}
	checkLetter(clickedLetter) { //This is the method that checks if the letter of the button clicked is in the phrase being display
		if (this.phrase.includes(clickedLetter)) { // & returns true if it is and false otherwise
			return true;
		} else {
			return false;
		}
	}
	showMatchedLetter(matchedLetter) { //The method that reveals the letter of clicked button if its in the phrase being displayed
		const liLetters = document.querySelectorAll('ul li');
		liLetters.forEach(matchLi => {
			if (matchLi.classList.contains(matchedLetter.toLowerCase())) {
				matchLi.removeAttribute('class', `hide letter ${matchLi}`);
				matchLi.setAttribute('class', 'show');
			}
		});
	}
}
