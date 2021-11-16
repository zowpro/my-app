import useFetch from './useFetch';

function Hook() {

    const { data, loading, error } = useFetch('http://localhost:3001/api/v1/');

    if(!loading && error == null) this.props.StoreData(data)
    
    return null;
}


const mapStateToProps = (state) => {
    return{
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{ 
        StoreData: (dataprops) => {dispatch({type: 'Update', data: dataprops}) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hook);
