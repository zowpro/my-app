import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import LZUTF8 from 'lzutf8';

class dataload extends Component {
    
    componentWillMount() {
        //Get Data From LocalStorage
        var data = localStorage.getItem('DataPatients');
        //Verify if LocalStorage isn't empty
        if(data != null) {
            //Decrompress Data
            var decompressdata = LZUTF8.decompress(data); 
            //Store Data in Redux Store
            this.props.StoreData(decompressdata);
        }
    }

    componentDidMount() { 
        fetch('http://localhost:3001/api/v1/')
          .then(response => response.json())
          .then(data => {
                //Store Data in Redux Store
                this.props.StoreData(data);
                //Compress Data and Store it in LocalStorage
                var datacompress = LZUTF8.compress(JSON.stringify(this.props.data))
                localStorage.setItem('DataPatients', datacompress);
          });
    }

    render() {
        return( <div className="App" onClick={()=>{ this.forceUpdate();}}>
                    <h1>List of Patients</h1>
                    
                    <table id="patients">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th onClick={()=>{ this.props.FilterByCancerOrig();}}>Cancer Origin <small>(Filter asc/desc)</small></th>
                            </tr>
                       </thead>
                        <tbody>
                        {this.props.data.map((item, i) => (
                            <tr key={item.key}>
                                <td>{item.name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.age}</td>
                                <td>{item.cancer_origin}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>);
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(dataload);