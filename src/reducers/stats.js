import memokingDB from '../db.js'

function stats(state = [], action) {
    console.log(action);
    switch (action.type) {
        case 'LOAD_STATS':
            return action.stats
            break;

        case 'ADD_STATS':
            console.log("Addign stats");
            var user = "User"; // @TODO get current user
            memokingDB.createStat(
                action.stat.game,
                action.stat.score,
                action.stat.speed,
                action.stat.correct,
                action.stat.mistakes,
                user
            );
            return [
                ...state,
                {
                    game: action.stat.game,
                    score: action.stat.score,
                    speed: action.stat.speed,
                    correct: action.stat.correct,
                    mistakes: action.stat.mistakes,
                    user
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
