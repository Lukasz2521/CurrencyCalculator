import React from 'react';
import { Row, Input,} from 'react-materialize';
import CurrencyService from './../../api/CurrencyService';
import CustomDropDown from './../Common/DropDown';

class CalculatorPage extends React.Component {
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
            <Row>
                <Input s={6} label="Ilość" />
                <CustomDropDown placeholder="Przelicz z" currencies={this.state.currencies} />
                <CustomDropDown placeholder="Przelicz na" currencies={this.state.currencies} />
            </Row>
            <Row>
                
            </Row>
        );
    }
}

export default CalculatorPage;