import React, {Component} from 'react'
import {connect} from 'react-redux'

class storage extends Component {
    render() {
        return(
            <div className='App'>
                <h3 style={this.styles}> {this.props.message} </h3>
                <button onClick={this.props.ButtonChange}>Suscribe</button>
            </div> 
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        data: null,
    };
};

const mapDispatchtoProps = (dispatch) => {
    return{
        ButtonChange: () => dispatch({type: 'Message change'}),
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(storage);