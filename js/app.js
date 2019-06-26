const quoted = new API('373374e7f3f8f54a0b49734fb7227c0c3874d8ec17bd6b07e45167a20570750b');
const ui = new Interface();

quoted.getCoinsApi();

// read the form

const form = document.querySelector('#formulario');

// eventlisteners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read the coin
    const coinSelect = document.querySelector('#moneda');
    const coinSelected = coinSelect.options[coinSelect.selectedIndex].value;

    // read the crypto coin
    const cryptoCoinSelect = document.querySelector('#criptomoneda');
    const cryptoCoinSelected = cryptoCoinSelect.options[cryptoCoinSelect.selectedIndex].value;

    // check that the values have something

    if (coinSelected === '' || cryptoCoinSelected === '') {
        ui.showMessage('Both fields are required', 'alert bg-danger text-center');
    } else {
        quoted.getValues(coinSelected, cryptoCoinSelected)
        .then(data => {
                ui.showResult(data.result.RAW,coinSelected, cryptoCoinSelected );
        })
    }
})