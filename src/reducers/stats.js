function stats(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'LOAD_STATS':
            return action.stats
            break;
        case 'ADD_STATS':
            console.log("Addign stats");
            return state;
            break;
        default:
            return state;
            break;

    }

}

export default stats;
