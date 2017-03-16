// This is an Action Creator. Should returns an 'Action';
// An 'Action' is always an object with a 'type' that describes
// the purpose of the action.
// It can also contain the 'payload'
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book 
    };
}