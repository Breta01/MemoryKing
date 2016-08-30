const memokingDB = (function() {
    var mkDB = {};
    var datastore = null;

    /** Open conection to the DB **/
    mkDB.open = function(callback) {
        /*var version = 1;
        // Open connection to the datastore of version.
        var request = indexedDB.open("memoking");

        // Handle datastore upgrades.
        request.onupgradeneeded = function(e) {
            var db = e.target.result;
            e.target.transaction.onerror = mkDB.onerror;

            // Delete the old datastore.
            if (db.objectStoreNames.contains('stats')) {
                db.deleteObjectStore('stats');
            }

            // Create a new datastore.
            var store = db.createObjectStore('stats', {
                keyPath: 'timestamp'
            });
            var titleIndex = store.createIndex("by_title", "title");
            var scoreIndex = store.createIndex("by_score", "score");
            var speedIndex = store.createIndex("by_speed", "speed");
            var scoreIndex = store.createIndex("by_mistakes", "mistakes");
            var userIndex = store.createIndex("by_user", "user");

            // Populate with initial test data
            // @TODO delete when ready
            store.put({ text: "Cards",
                        timestamp: new Date().getTime()
                    });
            store.put({ text: "Numbers",
                        timestamp: new Date().getTime()
                    });
        };

        // Handle successful datastore access.
        request.onsuccess = function(e) {
            // Get a reference to the DB.
            datastore = e.target.result;
            callback();
        };

        // Handle errors when opening the datastore.
        request.onerror = mkDB.onerror;*/

        var request = indexedDB.open("library");

        request.onupgradeneeded = function() {
        // The database did not previously exist, so create object stores and indexes.
        var db = request.result;
        var store = db.createObjectStore("books", {keyPath: "key"});
        var titleIndex = store.createIndex("by_title", "title", {unique: true});
        var authorIndex = store.createIndex("by_author", "author");

        // Populate with initial data.
        store.put({title: "Quarry Memories", author: "Fred", key: 123456});
        store.put({title: "Water Buffaloes", author: "Fred", key: 234567});
        store.put({title: "Bedrock Nights", author: "Barney", key: 345678});
        };

        request.onsuccess = function() {
            datastore = request.result;
            callback();
        };
    };

    /** Fetch all of the stats in the datastore **/
    mkDB.fetchStats = function(callback) {
        var db = datastore;


        var tx = db.transaction("books", "readonly");
        var store = tx.objectStore("books");
        var index = store.index("by_author");

        var request = store.openCursor(IDBKeyRange.lowerBound(0));
        var stats = [];
        request.onsuccess = function() {
            var cursor = request.result;
            if (cursor) {
                // Called for each matching record.
                console.log(cursor.value.isbn, cursor.value.title, cursor.value.author);
                console.log(cursor.value);
                stats.push(cursor.value);
                cursor.continue();
            } else {
                // No more matching records.
                console.log(null);
            }
        };
        tx.oncomplete = function() {
            console.log(stats);
            callback(stats);
        };
        /*var db = datastore;
        var transaction = db.transaction(['stats'], 'readwrite');
        var objStore = transaction.objectStore('stats');

        // Select all keys from 0 up
        var keyRange = IDBKeyRange.lowerBound(0);
        var cursorRequest = objStore.openCursor(keyRange);

        var stats = [];

        transaction.oncomplete = function(e) {
            callback(stats);
        };

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;

            if (!!result == false) {
                return;
            }

            stats.push(result.value);

            result.continue();
        };

        cursorRequest.onerror = mkDB.onerror;*/
    };

    /** Create a new stat **/
    // @TODO rework function, to pass object and database to put object (putting stats and settings) maybe?
    mkDB.createStat = function(title, score, speed, mistakes, user, callback) {
        var db = datastore;
        var transaction = db.transaction(['stats'], 'readwrite');
        var objStore = transaction.objectStore('stats');

        // Create a timestamp for the todo item. (this is key value)
        var timestamp = new Date().getTime();

        // Create an object for the todo item.
        var stat = {
            'title': title,
            'score': score,
            'speed': speed,
            'mistakes': mistakes,
            'user': user,
            'timestamp': timestamp
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


    // Export the mkDB object.
    return mkDB;
}());

export default memokingDB;
