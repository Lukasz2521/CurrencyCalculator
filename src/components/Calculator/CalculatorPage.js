import React from 'React';
import { Modal, Button } from 'react-materialize';

class CalculatorPage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <Modal header='Modal Header'
                       bottomSheet
                       trigger={<Button>MODAL BUTTOM SHEET STYLE</Button>}
                >
                    Kalkulator view
                </Modal>
            </div>
        );
    }
}

export default CalculatorPage;