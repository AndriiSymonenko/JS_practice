// import checkTextInput from './modules/checkTextInput';
import {
    postDate
} from '../services/requests'


const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');



    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Ошибка соединения',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const path = {
        designer: 'assets/server.php',
        questions: 'assets/question.php',
    }




    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arrTempName = item.files[0].name.split('.');

            arrTempName[0].length > 6 ? dots = '...' : dots = '.';
            const name = arrTempName[0].substring(0, 6) + dots + arrTempName[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');

            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);


            const formData = new FormData(item);

            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.questions;
            console.log(api);

            postDate(api, formData)
                .then(result => {
                    console.log(result);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.innerHTML = message.success;
                })
                .catch(() => {
                    textMessage.innerHTML = message.failure;
                    statusImg.setAttribute('src', message.fail);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp')
                    }, 5000);
                });
        });
    });
};

export default forms;