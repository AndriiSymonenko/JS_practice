const mask = (selector) => {

    let setCursorPosition = (pos, element) => {
        element.focus();

        if (element.setSelectionRange) { //полифил для старых браузеров
            element.setSelectionRange(pos, pos);
        } else if (element.createTextRange) {
            let range = element.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos); //конечная точка выделения
            range.moveStart('character', pos); //начальная точка выделения
            range.select();
        }
    };

    function createPhoneMask(event) {
        let matrix = '+3 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a; //перебор matrix, проверка замена символов
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);


    inputs.forEach(input => {
        input.addEventListener('input', createPhoneMask); //инициализация
        input.addEventListener('focus', createPhoneMask);
        input.addEventListener('blur', createPhoneMask);
    });
};

export default mask;