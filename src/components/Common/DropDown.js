import React, { PropTypes } from 'react';
import { Dropdown, NavItem, Button } from 'react-materialize';

class CustomDropDown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.currencies = props.currencies;
    }

    choseCurrency(elem, e) {
       
    }

    currenciesItems() {
        let listItems = [], index = 0;
        for (let currencie in this.props.currencies) {

            listItems.push(
                <NavItem key={index} onClick={this.choseCurrency.bind(this, currencie)}>
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
                <Button>{this.props.placeholder}</Button>
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