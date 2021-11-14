const InitialState = {
    data : "test",
}

const reducer = (state = InitialState, action) => {
    console.log("reducer", state.data, action.data);
    const newstate = (state);
    switch (action.type) {
        case "Update":
            newstate.data = action.data;
            return newstate;
        case "Delete":
            return state.data = [];
        default:
            return state.data = [];
    }
}

export default reducer;