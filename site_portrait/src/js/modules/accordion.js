const accordion = (triggersSelector, itemsSelector, headerActive) => {
    const buttons = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(itemsSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
        block.style.display = 'none';
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.add(headerActive)
            let panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = "block";
            }
        });
    });
};

export default accordion;