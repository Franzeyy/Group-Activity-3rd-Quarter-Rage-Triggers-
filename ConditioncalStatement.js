       // Example 1: if / else
        const ageInput = document.getElementById('ageInput');
        const checkAgeBtn = document.getElementById('checkAgeBtn');
        const ageResult = document.getElementById('ageResult');

        checkAgeBtn.addEventListener('click', () => {
            const age = Number(ageInput.value);
            if (isNaN(age)) {
                ageResult.textContent = 'Please enter a valid number for age.';
                ageResult.style.color = 'crimson';
                return;
            }

            // Here is the if / else logic: if age is 18 or older, show Adult, otherwise show Minor.
            if (age >= 18) {
                ageResult.textContent = `You are ${age} years old — Adult.`;
                ageResult.style.color = 'green';
            } else {
                ageResult.textContent = `You are ${age} years old — Minor.`;
                ageResult.style.color = 'blue';
            }
        });

        // Example 2: if / else if / else
        const tempInput = document.getElementById('tempInput');
        const tempBtn = document.getElementById('tempBtn');
        const tempResult = document.getElementById('tempResult');

        tempBtn.addEventListener('click', () => {
            const temp = Number(tempInput.value);
            if (isNaN(temp)) {
                tempResult.textContent = 'Please enter a valid temperature.';
                tempResult.style.color = 'crimson';
                return;
            }

            // if / else if / else chain provides multiple branches depending on the temperature
            if (temp <= 0) {
                tempResult.textContent = 'Freezing! Wear a heavy coat.';
                tempResult.style.color = 'navy';
            } else if (temp <= 20) {
                tempResult.textContent = 'Cool weather. Wear a jacket.';
                tempResult.style.color = 'teal';
            } else if (temp <= 30) {
                tempResult.textContent = 'Nice and warm.';
                tempResult.style.color = 'green';
            } else {
                tempResult.textContent = 'Hot — stay hydrated and stay in the shade.';
                tempResult.style.color = 'orange';
            }
        });


    const evenOddInput = document.getElementById('evenOddInput');
    const evenOddBtn = document.getElementById('evenOddBtn');
    const evenOddResult = document.getElementById('evenOddResult');

    evenOddBtn.addEventListener('click', () => {
        const value = Number(evenOddInput.value);

        if (isNaN(value)) {
            evenOddResult.textContent = 'Please enter a valid number.';
            evenOddResult.style.color = 'crimson';
            return;
        }

        if (value % 2 === 0) {
            evenOddResult.textContent = `The number ${value} is even.`;
            evenOddResult.style.color = 'blue';
        } else {
            evenOddResult.textContent = `The number ${value} is odd.`;
            evenOddResult.style.color = 'green';
        }
    });



            // Example 3: Guess a number (if / else if / else)
        const userNumInput = document.getElementById('userNum');
        const guessBtn = document.getElementById('guessBtn');
        const guessResult = document.getElementById('guessResult');
        let maxNumber = 15;
        let minNumber = 1;

        guessBtn.addEventListener('click', () => {
            const userNum = Number(userNumInput.value);
            if (isNaN(userNum) || userNum < minNumber || userNum > maxNumber) {
                guessResult.textContent = 'Please enter a valid number between 1 and 15.';
                guessResult.style.color = 'crimson';
                return;
            }


            const randomNum = Math.floor(Math.random() * maxNumber) + minNumber;
            switch (document.getElementById('LVL').value) {
                case 'EASY':
                    maxNumber = 3;
                    break;
                case 'MEDUIM':
                    maxNumber = 5;
                    break;
                case 'HARD':
                    maxNumber = 10;
                    break;
                case 'EXTREAME':
                    maxNumber = 15;
                    break;
                default:
                    maxNumber = 15;
            }

            // if / else if / else chain to check the guessed number
            if (userNum === randomNum) {
                guessResult.textContent = `Congratulations! You guessed it right. The number was ${randomNum}.`;
                guessResult.style.color = 'green';
            } else if (userNum < randomNum) {
                guessResult.textContent = `Too low! The correct number was ${randomNum}.`;
                guessResult.style.color = 'blue';
            } else {
                guessResult.textContent = `Too high! The correct number was ${randomNum}.`;
                guessResult.style.color = 'orange';
            }
        });