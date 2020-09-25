const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'draglive', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, prevDefaults, false);
        });
    });

    function prevDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, 0.7)';
    }

    function unhighLight(item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = '#ededed';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#ffffff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }

    }

    ['dragover', 'dragenter'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highLight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (event) => {
            input.files = event.dataTransfer.files;
            let dots;
            const arrTempName = input.files[0].name.split('.');

            arrTempName[0].length > 6 ? dots = '...' : dots = '.';
            const name = arrTempName[0].substring(0, 6) + dots + arrTempName[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;