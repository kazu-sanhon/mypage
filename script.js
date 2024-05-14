document.addEventListener('DOMContentLoaded', () => {
    const inputNumber = document.getElementById('input-number');
    const checkBtn = document.getElementById('check-btn');
    const infoContainer = document.getElementById('info-container');
    const container = document.getElementById('container');

    const correctNumber = "4649";

    checkBtn.addEventListener('click', () => {
        const enteredNumber = inputNumber.value.trim();

        if (enteredNumber === correctNumber) {
            infoContainer.style.display = 'block';  // Show the container
            container.style.display = 'none'
        } else {
            infoContainer.style.display = 'none';  // Hide the container
        }
    });

    const clickIcon = document.getElementById('click-icon');
    const messageContainer1 = document.getElementById('message-container-1');
    const messageContainer2 = document.getElementById('message-container-2');
    const messageContainer3 = document.getElementById('message-container-3');
    let clickCount = 0;

    clickIcon.addEventListener('click', () => {
        clickCount += 1;

        if (clickCount === 1) {
            messageContainer1.classList.remove('hidden');
            messageContainer1.classList.add('visible');
        }
        if (clickCount === 2) {
            messageContainer1.classList.remove('visible');
            messageContainer1.classList.add('hidden');
            messageContainer2.classList.remove('hidden');
            messageContainer2.classList.add('visible');
        }
        if (clickCount === 3) {
            messageContainer2.classList.remove('visible');
            messageContainer2.classList.add('hidden');
            messageContainer3.classList.remove('hidden');
            messageContainer3.classList.add('visible');
        }
    });
});
