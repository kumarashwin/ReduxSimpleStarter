// State argument is not application state;
// only that which this reducer is responsible for
export default (state = null, action) => {
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
            break;
        default:
            break;
    }
    return state;
}