function stats(state = [], action) {
    switch (action.type) {
        case 'LOAD_STATS':
            console.log("Loading stats");
            return action.stats
            break;
        default:
            return state;
            break;

    }

}

export default stats;
