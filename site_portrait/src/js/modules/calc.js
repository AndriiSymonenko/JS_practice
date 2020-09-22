const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        console.log(materialBlock.value);
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.innerHTML = 'Пожалуйста выберите размер и материал картины';
        } else if (promoBlock.value === 'IWANTPOPART') {
            resultBlock.innerHTML = Math.round(sum * 0.7);
        } else {
            resultBlock.innerHTML = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promoBlock.addEventListener('input', calcFunction);
};

export default calc;