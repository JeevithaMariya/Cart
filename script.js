function toggleAccordion(box) {
    const allBoxes = document.querySelectorAll('.accordion-box');
    allBoxes.forEach((otherBox) => {
        if (otherBox !== box) {
            otherBox.classList.remove('active');
        }
    });

    box.classList.toggle('active');

    const radioButton = box.querySelector('input[type="radio"]');
    if (box.classList.contains('active')) {
        radioButton.checked = true;
    } else {
        radioButton.checked = false;
    }
}

function selectColor(option) {
    const accordionBox = option.closest('.accordion-box');
    accordionBox.style.backgroundColor = option.innerText.toLowerCase();
    event.stopPropagation();
}

function selectSize(option) {
    event.stopPropagation();
}