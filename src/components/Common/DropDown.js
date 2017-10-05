import React, { PropTypes } from 'react';
import { Dropdown, NavItem, Button } from 'react-materialize';

class CustomDropDown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.currencies = props.currencies;
        this.state = {
            placeholder: props.placeholder
        }
    }

    choseCurrency(elem, e, value) {
        this.setState({
            placeholder: elem
        });
        this.props.convertHandler(e);
    }

    currenciesItems() {
        let listItems = [], index = 0;
        for (let currencie in this.props.currencies) {
            listItems.push(
                <NavItem
                    key={index}
                    onClick={this.choseCurrency.bind(this, currencie, this.props.currencies[currencie])}
                >
                    {currencie} {this.props.currencies[currencie]}
                    
                </NavItem>
            );
            index++;
        }
        return listItems;
    }

    render() {
        const dropDownOptions = { hover: true };

        return (
            <Dropdown trigger={
                <Button>{this.state.placeholder}</Button>
                } options={
                    dropDownOptions
                }
            >
                {this.currenciesItems()}
            </Dropdown>
        );
    }
}


CustomDropDown.propTypes = {
    currencies: PropTypes.object,
    placeholder: PropTypes.string
};

export default CustomDropDown;