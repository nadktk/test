export default function (state = [], action) {
    switch (action.type) {
        case "GET_CLIENTS":
            return action.payload;
        default: 
            return state;
    }
}