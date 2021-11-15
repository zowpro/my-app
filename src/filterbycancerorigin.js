import React, { Component } from 'react';
import {connect} from 'react-redux';

class filteFirbycancerorigin extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th onClick={()=>{ this.props.FilterByCancerOrig();}}>Cancer Origin <small>(Filter asc/desc)</small></th>
                </tr>
            </thead>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{ 
        StoreData: (dataprops) => {dispatch({type: 'Update', data: dataprops}) },
        FilterByCancerOrig: () => {dispatch({type: 'Filter'});  },
        //CompressData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(filteFirbycancerorigin);
