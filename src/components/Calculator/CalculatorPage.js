import React from 'react';
import { Row, Input} from 'react-materialize';
import CurrencyService from './../../api/CurrencyService';
import CustomDropDown from './../Common/DropDown';

class CalculatorPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currencies: {},
            convertFrom: 0,
            convertFromLabel: '',
            convertToLabel: '',
            convertTo: 0,
            quantity: 0
        };
        this.getCurrencies.bind(this);
        this.convertFromHandler = this.convertFromHandler.bind(this);
        this.convertToHandler = this.convertToHandler.bind(this);
    }

    componentWillMount() {
        this.getCurrencies();
    }

    getCurrencies() {
        CurrencyService.getAllCurrencies().then((response) => {
            this.setState({currencies:response.quotes});
        });
    }

    convertFromHandler(value) {
        this.setState({convertFrom: value});
    }

    convertToHandler(value) {
        this.setState({convertTo: value});
    }

    convertCurrency() {
        return (this.state.convertFrom / this.state.convertTo).toFixed(2);
    }

    render() {
        return (
            <div>
                <Row>
                    <Input s={6} label="Ilość" value={this.state.quantity} />
                    <CustomDropDown
                        convertHandler={this.convertFromHandler}
                        placeholder="Przelicz z"
                        currencies={this.state.currencies}
                    />
                    <CustomDropDown
                        convertHandler={this.convertToHandler}
                        placeholder="Przelicz na"
                        currencies={this.state.currencies}
                    />
                </Row>
                <Row>
                    <div><span>{this.state.quantity} {this.state}</span>    {this.convertCurrency()}</div>
                </Row>
            </div>
        );
    }
}

export default CalculatorPage;