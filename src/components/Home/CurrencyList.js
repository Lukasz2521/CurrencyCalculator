import React, { PropTypes } from 'react';
import { Button, Icon, Collection, CollectionItem } from 'react-materialize';

const CurrencyList = (props) => {
    let currencies = props.currencies;
    const currenciesItems = () => {
        let listItems = [], index = 0;
        for (let currencie in currencies) {
            listItems.push(
                <CollectionItem key={index}>
                    {currencie} {currencies[currencie]}
                    <Button waves='light'>
		                <Icon>thumb_up</Icon>
                    </Button>
                </CollectionItem>
            );
            index++;
        }
        return listItems;
    }

    return (<Collection>{currenciesItems()}</Collection>);
};

CurrencyList.propTypes = {
    currencies: PropTypes.object
};

export default CurrencyList;