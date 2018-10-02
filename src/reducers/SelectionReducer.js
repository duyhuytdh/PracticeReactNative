export default (state = null, action) => {
    console.log('Selection Reducer: ');
    console.log(action);

    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
}