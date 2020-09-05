import checkNumInputs from './checkNumInputs';

const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    //Проверка является ли значение числом  
    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Ошибка соединения',
    };

    const postDate = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        let result = await fetch(url, {
            method: 'POST',
            body: data,
        });
        return await result.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            postDate('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;