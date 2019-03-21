import PropTypes from 'prop-types';
import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intercalado: false,
        }
    }

    componentDidMount() {
    }

    tags = () => {
        if (this.state.intercalado)
            return (
                <div>
                    <h1>Bienvenido</h1>
                    <h1>Weather App</h1>
                </div>
            );
        return (
            <div>
                <h1>Weather App</h1>
                <h1>Bienvenido</h1>
            </div>
        );
    }

    intercalar = () => {
        this.setState({
            intercalado: !this.state.intercalado
        })
    }

    render() {
        return (
            <div>
                {this.tags()}
                <Button variant="contained" color="primary" onClick={this.intercalar}>
                    intercalar
                </Button>
                <ul>
                    <li>
                        <Link to="'/weather/March/20'"> Weather for March 20 </Link>
                    </li>
                    <li>
                        <Link to="'/weather/March/21'"> Weather for March 21 </Link>
                    </li>
                    <li>
                        <Link to="'/weather/March/22'"> Weather for March 22 </Link>
                    </li>
                    <li>
                        <Link to="'/weather/March/23'"> Weather for March 23 </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

Home.propTypes = {
};

export default Home;

