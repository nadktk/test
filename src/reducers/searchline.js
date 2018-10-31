export default function (state = "", action) {
    switch (action.type) {
        case "SEARCHLINE_INPUT":
            return action.payload;
        default: 
            return state;
    }
}