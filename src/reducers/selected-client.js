export default function (state = null, action) {
    switch (action.type) {
        case 'SELECTED_CLIENT':
            return action.payload;
        default: 
            return state;
    }
}