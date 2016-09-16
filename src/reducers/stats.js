import memokingDB from '../db.js'

function stats(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'LOAD_STATS':
            return action.stats
            break;
        case 'ADD_STATS':
            console.log("Addign stats");
            memokingDB.createStat(action.stat.game, action.stat.score);
            return [
                ...state,
                {
                    game: action.stat.game,
                    score: action.stat.score
                }
            ];
            break;
        default:
            console.log("No action specified")
            return state;
            break;

    }

}

export default stats;
