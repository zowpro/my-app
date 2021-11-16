const InitialState = {
    data : [                
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
   ],
    filter : "asc",
}

const reducer = (state = InitialState, action) => {
    const newstate = (state);
    console.log("reducer", action.data, state.filter, action.type);
    
    if(action.type === "Update") {
        newstate.data = action.data;
        return newstate;
    } else if(action.type === "Filter") {
        if(state.filter == "desc") {
            newstate.data = state.data.sort((a, b) => (a[action.key] > b[action.key]) ? 1 : -1);
            newstate.filter = "asc";
            console.log(newstate.data)
            return newstate
        } else {
            newstate.data = state.data.sort((a, b) => (a[action.key] < b[action.key]) ? 1 : -1);
            newstate.filter = "desc";
            console.log(newstate.data)
            return newstate
        }
    } else {
        return newstate
    }


}

export default reducer;