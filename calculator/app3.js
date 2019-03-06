const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const sexSelect = document.querySelector('#sex');
const heightInput = document.querySelector('#height');
const ageInput = document.querySelector('#age');
const weightInput = document.querySelector('#weight');
const showResult = document.querySelector('#show-result');
const alert = document.querySelector('ion-alert-controller');

const clear = () => {
    nameInput.value = '';
    surnameInput.value = '';
    sexSelect.value = '';
    heightInput.value = '';
    ageInput.value = '';
    weightInput.value = '';
};

showResult.addEventListener('click', () => {
    const name = nameInput.value;
    const surname = surnameInput.value;
    const sex = sexSelect.value;
    const height = heightInput.value;
    const age = ageInput.value;
    const weight = weightInput.value;
    let sum = 0;
    let ketle = 0;
    let ketleMsg = '';

    if (
        name.trim().length <= 0 ||
        surname.trim().length <= 0 ||
        sex.trim().length <= 0 ||
        height.trim().length <= 0 ||
        height.value < 0 ||
        age.trim().length <= 0 ||
        age.value < 0 ||
        weight.trim().length <= 0 ||
        weight.value < 0
    ) {
        alert.create({
            message: 'Introduceți în toate câmpurile date necesare',
            header: 'Câmpuri necomplete',
            buttons: ['OK']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    if (sex == 'male') {
        sum += height - 100 - (height - 150) / 4 + (age - 20) / 4;
    }  else {
        sum += height - 100 - (height - 150) / 2.5 + (age - 20) / 6;
    }

    ketle += weight / ((height / 100) * (height / 100));

    if (ketle < 17.5) {
        ketleMsg = 'Insuficiență, periculoasă pentru sănătate';
    } else if (ketle < 20) {
        ketleMsg = 'Puțin redus, nepericulos pentru sănătate.';
    } else if (ketle < 26) {
        ketleMsg = 'normal';
    } else if (ketle < 28) {
        ketleMsg = 'excesiv';
    } else if (ketle < 31) {
        ketleMsg = 'Gradul de obezitate 1';
    } else if (ketle < 36) {
        ketleMsg = 'Gradul de obezitate 2'
    } else if (ketle < 41) {
        ketleMsg = 'Gradul de obezitate 3';
    } else if (ketle > 41) {
        ketleMsg = 'Gradul de obezitate 4';
    }

    const message = `Masa corporală necesară - ${sum}kg, dar aveți ${weight}kg - fiind în categoria: ${ketleMsg}`;
    const showPers = `${surname} ${name}`;

    alert.create({
        header: `${showPers}`,
        message: `${message}`,
        buttons: ['OK']
    }).then(alertElement => {
        alertElement.present();
    });
    clear();
});