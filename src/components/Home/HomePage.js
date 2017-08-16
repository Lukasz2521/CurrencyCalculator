import React from 'react';
import CurrencyList from './CurrencyList';
import CurrencyService from './../../api/CurrencyService';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currencies: {}
        };
        this.getCurrencies.bind(this);
    }

    componentWillMount() {
        this.getCurrencies();
    }

    getCurrencies() {
        CurrencyService.getAllCurrencies().then((response) => {
            this.setState({currencies:response.quotes});
        });
    }

    render() {
        return (
            <div><CurrencyList currencies={this.state.currencies} /></div>
        );
    }
}

export default HomePage;