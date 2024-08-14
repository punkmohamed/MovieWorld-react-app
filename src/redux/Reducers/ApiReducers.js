const INITIAL_VALUE = {
    list: []
}

const apiReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}
export default apiReducer
