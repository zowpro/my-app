import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import Hook from './hook.js';

class dataload extends Component {
    
    componentWillMount() {
        /*//Get Data From LocalStorage
        var data = localStorage.getItem('DataPatients');
        //Verify if LocalStorage isn't empty
        if(data != null) {
            //Decrompress Data
            var decompressed = LZString.decompress(data);
            var stringdecompressed = JSON.parse(decompressed)
            //Store Data in Redux Store
            this.props.StoreData(stringdecompressed);
        }*/
    }

    componentDidMount() {
        /*// Getting from server our Data 
        fetch('http://localhost:3001/api/v1/')
            .then(response => response.json())
            .then(data => {
                //Store Data in Redux Store
                this.props.StoreData(data);
                //Compress Data and Store it in LocalStorage
                var string = JSON.stringify(data);
                var compressed = LZString.compress(string);
                localStorage.setItem('DataPatients', compressed);
            })
            .catch(error => {
              alert("Error of loading from server !")
            });*/
    }

    render() {
        return( <div className="App">                            
                    <Hook />
                </div>);
    }
}


export default dataload;