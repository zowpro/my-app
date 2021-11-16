import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import Table from './table';
import LZUTF8 from 'lzutf8';

class dataload extends Component {
    
    componentWillMount() {
        /*//Get Data From LocalStorage
        var data = localStorage.getItem('DataPatients');
        //Verify if LocalStorage isn't empty
        if(data != null) {
            //Decrompress Data
            var decompressdata = LZUTF8.decompress(data); 
            //Store Data in Redux Store
            this.props.StoreData(decompressdata);
        }*/
    }

    componentDidMount() { 
        /*fetch('http://localhost:3001/api/v1/')
          .then(response => response.json())
          .then(data => {
                //Store Data in Redux Store
                this.props.StoreData(data);
                //Compress Data and Store it in LocalStorage
                var datacompress = LZUTF8.compress(JSON.stringify(this.props.data))
                localStorage.setItem('DataPatients', datacompress);
          })
          .catch(error => {
              alert("Error of loading from server !")
          });*/
    }

    render() {
        return( <div className="App">
                    <h1>List of Patients</h1>                
                    <Table data={this.props.data}/>
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