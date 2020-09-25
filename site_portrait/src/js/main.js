import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInput from './modules/checkTextInput';
import showMoreStyles from "./modules/showMoreStyles";
import calc from './modules/calc';
import filter from './modules/filter';
import picSize from './modules/picSize';
import accordion from './modules/accordion';
import burger from "./modules/burger";
import scroll from "./modules/scroll";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    picSize('.sizes-block');
    accordion('.accordion-heading', '.accordion-block', '.often-questions__active-style');
    burger('.burger-menu', '.burger');
    scroll('.pageup');
    drop();
});