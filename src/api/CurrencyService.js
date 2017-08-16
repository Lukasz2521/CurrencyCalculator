import constants from './../constants/api';
import 'whatwg-fetch';

class CurrencyService {
    static getAllCurrencies() {
        return fetch(constants.key)
            .then((response) => {
                return response.json();
            }).then((json) => {
                return json;
            }).catch((ex) => {
                console.log(ex);
            });
    }

    static getCurrencyById() {

    }
}

export default CurrencyService;