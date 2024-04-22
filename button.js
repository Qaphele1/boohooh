const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = "I Love You More &#128525; and you are coming soon "
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() *
        (wrapperRect.width - noBtnRect.width)) +1;
    const j = Math.floor(Math.random() * 
    (wrapperRect.height - noBtnRect.height)) +1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
})
noBtn.addEventListener('click', () => {
    // Increase the size of the Yes button when No button is clicked
    yesBtn.style.transform = 'scale(1.1)'; // You can adjust the scale value as needed
});

// Reset the size of the Yes button when mouse leaves the No button
noBtn.addEventListener('mouseleave', () => {
    yesBtn.style.transform = 'scale(1)';
});
