import { useEffect } from "react";
import useFetch from './useFetch';
import {connect} from 'react-redux';
import Table from './table.js';
import LZString from 'lzutf8';
import './index.css';
import { useSelector, useDispatch } from "react-redux";

const Hook = () => {
    const dataStore = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const [{ data : dataFetch, loading, error }, doFetch]  = useFetch();

    if(!loading) {
        //Store Data in Redux Store
        dispatch({type: 'Update', data: dataFetch}) 
        //Compress Data and Store it in LocalStorage
        if(dataFetch != null) {
            /*var string = JSON.stringify(dataFetch);
            var compressed = LZString.compress(string);*/
            localStorage.setItem('DataPatients', JSON.stringify(dataFetch))
        }
    } else { 
        //Get Data From LocalStorage
        var dataLS = localStorage.getItem('DataPatients');
        //Verify if LocalStorage isn't empty
        if(dataLS != null) {
            //Decrompress Data
            /*var decompressed = LZString.decompress(data);
            var stringdecompressed = JSON.parse(decompressed)*/
            //Store Data in Redux Store
            dispatch({type: 'Update', data: JSON.parse(dataLS)})
        }
    }
    
    useEffect(() => {
        doFetch();
      }, [doFetch]);
    return(
        <div>
            <h1>Table of List</h1>  
            {loading ? <div className="loader"></div> : <Table datax={dataStore}/>}
            {error}
        </div>
    );
}

export default Hook;
