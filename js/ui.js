class Interface {

    constructor() {
        this.init();
    }
    init() {
        this.buildSelect();
    }

    buildSelect() {
        quoted.getCoinsApi()
        .then(coins => {

            // create a option select
            const select = document.querySelector('#criptomoneda');

            for (const [key, value] of Object.entries(coins.coins.Data) ) {
               // add the symbol and the name
               const option = document.createElement('option');
               option.value = value.Symbol;
               option.appendChild(document.createTextNode(value.CoinName));
               select.appendChild(option);
            }
            
        })
    }

    showMessage(message, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message));

        // select message
        const divMessage = document.querySelector('.mensajes');
        divMessage.appendChild(div);
        //show messages
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    // print the result

    showResult(result, moneda, crypto) {

        // in case of other result hide the previous result
        const previousResult = document.querySelector('#resultado > div');
    
        if (previousResult) {
            previousResult.remove();
        }
        const coinData = result[crypto][moneda];

    
        let price = coinData.PRICE.toFixed(2),
            porcentaje = coinData.CHANGEPCTDAY.toFixed(2),
            updated = new Date(coinData.LASTUPDATE * 1000).toLocaleDateString('es-MX');
        
        // build the template

        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${coinData.FROMSYMBOL} a moneda ${coinData.TOSYMBOL} es de: $ ${price}</p>
                    <p>Variación último día: % ${porcentaje}</p>
                    <p>Ultima actualización: ${updated}</p>
                </div>
            </div>
        `;

        this.showHideSpinner('block'); 
        
        setTimeout(() => {
            document.querySelector('#resultado').innerHTML = templateHTML;
            this.showHideSpinner('none'); 
        }, 3000);
    }

    showHideSpinner(view) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = view;    
    }
}