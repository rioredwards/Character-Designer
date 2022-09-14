/* Imports */

/* DOM Elements */
const headSelect = document.getElementById('head-select');
const middleSelect = document.getElementById('middle-select');
const pantsSelect = document.getElementById('pants-select');
const headImage = document.getElementById('head-image');
const middleImage = document.getElementById('middle-image');
const pantsImage = document.getElementById('pants-image');
const phraseInput = document.getElementById('phrase-input');
const addButton = document.getElementById('add-button');
const phraseList = document.getElementById('phrase-list');

/* State */
const character = {
    head: 'bird',
    middle: 'dress',
    pants: 'white',
    phrases: [],
};

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;
    displayCharacter();
});

middleSelect.addEventListener('change', () => {
    character.middle = middleSelect.value;
    displayCharacter();
});

pantsSelect.addEventListener('change', () => {
    character.pants = pantsSelect.value;
    displayCharacter();
});

function displayCharacter() {
    headImage.src = 'assets/character/' + character.head + '-head.png';
    middleImage.src = 'assets/character/' + character.middle + '-middle.png';
    pantsImage.src = 'assets/character/' + character.pants + '-pants.png';
}

function displayPhrases() {
    phraseList.innerHTML = '';

    for (const phrase of character.phrases) {
        const li = document.createElement('li');
        li.textContent = phrase;
        phraseList.append(li);
    }
}

addButton.addEventListener('click', () => {
    if (phraseInput.value !== '') {
        const phrase = phraseInput.value;
        character.phrases.push(phrase);
        displayPhrases();
        phraseInput.value = '';
    }
});

displayCharacter();
displayPhrases();
