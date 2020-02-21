const convertValue = document.getElementById('convertValue');
const inputState = document.getElementById('inputState');
const convert_to = document.getElementById('convert_to');
const out = document.getElementById('out');


/*Принимает данные и конвертирует их в JSON формат*/
const getJSON = () => {
    const data = {
        distance: {
            unit: inputState.value,
            value: convertValue.value
        },
        convert_to: convert_to.value
    };
    const dataJSON = JSON.stringify(data);
    return out.innerText = parseData(dataJSON);
};

/*Принимает строку формата JSON парсит её и вызывает нужную ф-ю конвертации*/
const parseData = (dataJSON) => {
    let temp = JSON.parse(dataJSON);
    const {distance: {unit, value}, convert_to} = temp;

    if(value === '' || value === 0 || value < 0){
        return alert('Введите корректные данные');
    }else {
        switch (unit) {
            case 'M':
                return getMeter(convert_to, value);
            case 'Cm':
                return getCentimeters(convert_to, value);
            case 'In':
                return getInches(convert_to, value);
            case 'Ft':
                return getFeet(convert_to, value);
        }
    }
};

const getMeter = (convert_to, value) => {
    switch (convert_to) {
        case 'Cm':
            return value * 100;
        case 'In':
            return value * 39.37;
        case 'Ft':
            return value * 3.281;
        default:
            return value;
    }
};

const getCentimeters = (convert_to, value) => {
    switch (convert_to) {
        case 'M':
            return value / 100;
        case 'In':
            return value / 39.37;
        case 'Ft':
            return value / 30.48;
        default :
            return value;
    }
};

const getInches = (convert_to, value) => {
    switch (convert_to) {
        case 'M':
            return value / 39.37;
        case 'Cm':
            return value * 2.54;
        case 'Ft':
            return value / 12;
        default :
            return value;
    }
};

const getFeet = (convert_to, value) => {
    switch (convert_to) {
        case 'M':
            return value / 3.281;
        case 'Cm':
            return value * 30.48;
        case 'In':
            return value * 12;
        default :
            return value;
    }
};
