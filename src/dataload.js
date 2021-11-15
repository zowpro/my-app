import React, { Component } from 'react';
import {connect} from 'react-redux';
import PatientList from './patientlist.js';
import FilterByCancerOrigin from './filterbycancerorigin.js';
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
                        <FilterByCancerOrigin />
                        <tbody>
                        {this.props.data.map((item, i) => (
                            <PatientList data={item} key={i}/>
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