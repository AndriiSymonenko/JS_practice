import checkNumInputs from './checkNumInputs';


const changeModal = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    //Проверка является ли значение числом      
    checkNumInputs('#width');
    checkNumInputs('#height');


    function bindActionElement(event, element, property) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) { //имя элемента приходит в верхнем регистре
                    case 'SPAN':
                        state[property] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[property] = 'Холодное' : state[property] = 'Тёплое';
                            element.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[property] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[property] = item.value;
                        break;
                }
                console.log(state);
            });

        });
    }
    bindActionElement('click', windowForm, 'form');
    bindActionElement('input', windowHeight, 'height');
    bindActionElement('input', windowWidth, 'width');
    bindActionElement('change', windowType, 'type');
    bindActionElement('change', windowProfile, 'profile');
}

export default changeModal;