import React, { Component } from 'react';
import {connect} from 'react-redux';
import PatientList from './patientlist.js';
import FilterByCancerOrigin from './filterbycancerorigin.js';
import LZUTF8 from 'lzutf8';

class dataload extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          data: [                
                    {
                        "name":"Paul",
                        "last_name":"Doe",
                        "age":"45",
                        "cancer_origin":"a",
                    },
                    {
                        "name":"Alex",
                        "last_name":"Brown",
                        "age":"64",
                        "cancer_origin":"b",
                    },
                    {
                        "name":"Oliver",
                        "last_name":"Black",
                        "age":"60",
                        "cancer_origin":"c",
                    }
               ]
        };
    }

    componentWillMount() {
        var data = LZUTF8.compress(JSON.stringify(this.state.data));
        console.log(data, JSON.parse(LZUTF8.decompress(data)));
        /*var data = localStorage.getItem('DataPatients');
        console.log("WillMount", data);
        if(data != null) {
            console.log("WillMountIf",data);
            //this.props.StoreData(data);
        }*/
    }

    componentDidMount() { console.log("DidMount")
        /*fetch('http://localhost:3001/api/v1/')
          .then(response => response.json())
          .then(data => this.setState({ data }));
          console.log("DidMount", data);
          this.props.StoreData(data);
          localStorage.setItem('DataPatients', this.state.data);*/
    }

    render() {
        console.log("Render", this.props.data)
        return( <div className="App">
                    <h1>List of Patients</h1>
                    <table>
                        <FilterByCancerOrigin onClick={this.props.FilterByCancerOrig} />
                        <tbody>
                        {this.state.data.map((item, i) => (
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
        FilterByCancerOrig: () => {dispatch({type: 'Filter'}) },
        //CompressData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(dataload);