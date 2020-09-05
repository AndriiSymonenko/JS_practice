import checkNumInputs from './checkNumInputs';

const changeModal = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelector('#width'),
        windowHeight = document.querySelector('#height'),
        windowType = document.querySelector('#type'),
        windowProfile = document.querySelectorAll('.checkbox');
  //Проверка является ли значение числом      
    checkNumInputs('#width');
    checkNumInputs('#height');

    windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
            console.log(state);
        });
    });
}

export default changeModal;