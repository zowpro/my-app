const InitialState = {
    data : null,
    filter : "asc",
}

const reducer = (state = InitialState, action) => {
    const newstate = (state);
    

    if(action.type === "Update") { // Updating Data of Reducer from server 
        newstate.data = action.data;
        return newstate;
    } else if(action.type === "Filter") { //Filtring Table Data depending of key
        if(state.filter == "desc") { //Filter asc
            newstate.data = state.data.sort((a, b) => (a[action.key] > b[action.key]) ? 1 : -1);
            newstate.filter = "asc";
            console.log(newstate.data)
            return newstate
        } else { //Filter desc
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