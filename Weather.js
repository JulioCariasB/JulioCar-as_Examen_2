import PropTypes from 'prop-types';
import React from 'react';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intercalado: false,
        }
    }

    componentDidMount() {
        console.log("this: ", this.props);
        this.props.obtenerData(this.props.match.params.month, this.props.match.params.day);
    }

    render() {
        return (
            <div>
                <h1>Max: {this.props.items.max}</h1>
                <h1>Min: {this.props.items.min}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    weatherItems: state.weatherItems,
    items: state.items
});
  
const mapDispatchToProps = dispatch => ({
    obtenerData: (month, day) => dispatch(ACTIONS.obtenerData(month, day)),
});

Weather.propTypes = {
    
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Weather);

