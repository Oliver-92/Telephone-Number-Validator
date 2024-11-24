const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

function isValid(num) {
    const trimmedNum = num.trim();

    if (trimmedNum === '') {
        alert("Please provide a phone number");
        return;
    }

    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    if (phoneRegex.test(trimmedNum)) {
        result.innerHTML += `<p style="color: green;">Valid US number: ${trimmedNum}</p>`;
    } else {
        result.innerHTML += `<p style="color: red;">Invalid US number: ${trimmedNum}</p>`;
    }
}

function clearResults() {
    result.innerHTML = '';
}

checkButton.addEventListener('click', () => {
    isValid(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        isValid(userInput.value);
        userInput.value = '';
    }
});

clearButton.addEventListener('click', clearResults);
