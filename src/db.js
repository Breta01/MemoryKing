const memokingDB = (function() {
    var mkDB = {};
    var datastore = null;

    /** Open conection to the DB **/
    mkDB.open = function(callback) {
        var request = indexedDB.open("memoking");

        request.onupgradeneeded = function() {
            // The database did not previously exist, so create object stores and indexes.
            var db = request.result;
            var store = db.createObjectStore('stats', {
                keyPath: 'timestamp'
            });
            var gameIndex = store.createIndex("by_game", "game");
            var scoreIndex = store.createIndex("by_score", "score");
            var speedIndex = store.createIndex("by_speed", "speed");
            var correctIndex = store.createIndex("by_correct", "correct");
            var mistakesIndex = store.createIndex("by_mistakes", "mistakes");
            var userIndex = store.createIndex("by_user", "user");

            // Populate with initial TEST data.
            store.put({game: "Cards", score: 100, speed: 230, correct: 50, mistakes: 2, user: "Breta", timestamp: 1});
            store.put({game: "Numbers", score: 300, speed: 500, correct: 100, mistakes: 1, user: "Breta", timestamp: 2 });
            store.put({game: "Cards", score: 50, speed: 300, correct: 20, mistakes: 32, user: "Guest", timestamp: 3});
            store.put({game: "Cards", score: 120, speed: 150, correct: 52, mistakes: 0, user: "Breta", timestamp: 5});
        };

        request.onsuccess = function() {
            datastore = request.result;
            callback();
        };

        // Handle errors when opening the datastore.
        request.onerror = mkDB.onerror;
    };

    /** Fetch all of the stats from the datastore **/
    mkDB.fetchStats = function(callback, user = "All") {
        var db = datastore;
        var tx = db.transaction("stats", "readonly");
        var store = tx.objectStore("stats");

        //Get only certain user data if specified
        if (user === "All") {
            var request = store.openCursor(IDBKeyRange.lowerBound(0));
        } else {
            var index = store.index("by_user");
            var request = index.openCursor(IDBKeyRange.only(user));
        }

        // Storing loaded stats
        var stats = [];

        request.onsuccess = function() {
            var res = request.result;
            if (res) {
                // Called for each matching record.
                stats.push(res.value);
                res.continue();
            }
        };

        tx.oncomplete = function() {
            console.log(stats);
            callback(stats);
        };

        request.onerror = mkDB.onerror;
    };

    /** Create a new stat **/
    mkDB.createStat = function(title, score, speed, correct, mistakes, user,
					callback = function(st) {console.log("Added stat to DB: " + st)}) {
        var db = datastore;
        var transaction = db.transaction(['stats'], 'readwrite');
        var objStore = transaction.objectStore('stats');

        // Create a timestamp for the stat item. (this is key value)
        var timestamp = new Date().getTime();

        // Create an object for the stat item.
        var stat = {
            game: title,
            score: score,
            speed: speed,
            correct: correct,
            mistakes: mistakes,
            user: user,
            timestamp: timestamp
        };

        // Create the datastore request.
        var request = objStore.put(stat);

        // Handle a successful datastore put.
        request.onsuccess = function(e) {
            callback(stat);
        };

        // Handle errors.
        request.onerror = mkDB.onerror;
    };

    /** Delete a stat **/
    mkDB.deleteStat = function(id, callback) {
        var db = datastore;
        var transaction = db.transaction(['stats'], 'readwrite');
        var objStore = transaction.objectStore('stats');

        var request = objStore.delete(id);

        request.onsuccess = function(e) {
            callback();
        }

        request.onerror = function(e) {
            console.log(e);
        }
    };

    mkDB.onerror = function() {
        console.log("Something went wrong! Error in database");
    }

    // Export the mkDB object.
    return mkDB;
}());

export default memokingDB;
