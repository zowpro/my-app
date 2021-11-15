const InitialState = {
    data : "test",
    filter : "desc"
}

const reducer = (state = InitialState, action) => {
    console.log("reducer", state.data, action.data);
    const newstate = (state);
    switch (action.type) {
        case "Update":
            newstate.data = action.data;
            return newstate;
        case "Filter": {
            if(state.filter === "desc") {
                return state.data = action.data.sort((a, b) => (a.cancer_origin > b.cancer_origin) ? 1 : -1);
            } else {
                
                return state.data = [];
            }
        }
        default:
            return state.data = [];
    }
}

export default reducer;