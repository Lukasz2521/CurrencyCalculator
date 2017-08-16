import React, { PropTypes } from 'react';
import { Col, Row } from 'react-materialize';
import Menu from './components/Common/Menu';
import MainFooter from './components/Common/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Row>
                    <Col s={12}>
                        {this.props.children}
                    </Col>
                </Row>
                <MainFooter />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
export default App;