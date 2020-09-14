import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModal from './modules/stateModal';
import timer from './modules/timer';
import images from './modules/imgSlider';

window.addEventListener('DOMContentLoaded', () => {
    modals();

    let modalState = {};
    let deadLine = '2020-09-21';

    changeModal(modalState);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadLine);
    images();
});
console.log('1');