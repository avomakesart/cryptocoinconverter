class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    // get all the coins
    async getCoinsApi() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

        // fetch to the api
        const urlGetCoins = await fetch(url);

        // JSON response
        const coins = await urlGetCoins.json();



        return {
            coins
        }

    }

    async getValues(moneda, cryptocoin) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocoin}&tsyms=${moneda}&api_key=$`;


        const urlConvert = await fetch(url);

        const result = await urlConvert.json();

        return {
            result
        }
    }
}



