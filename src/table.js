import React from 'react';
import {connect} from 'react-redux';

class Table extends React.Component {
    
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th onClick={() => this.props.FilterByCancerOrig(key)} key={key}>{key.toUpperCase()} <small>(Filter asc/desc)</small></th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }
    
    render() {
        return (
          <div>
            <table id="patients">
            <thead onClick={()=>{ this.forceUpdate();}}>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}


const mapStateToProps = (state) => {
    return{
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{ 
        FilterByCancerOrig: (keyprops) => {dispatch({type: 'Filter', key : keyprops});  },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);