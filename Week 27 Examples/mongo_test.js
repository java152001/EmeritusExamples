const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// const client = new MongoClient(url);

// async function main() {
//     await client.connect();
//     console.log('Successfully Connected');
//     return 'done'
// }

// main()
//     .then(console.log)
//     .catch(error => console.log(error))
//     .finally(() => client.close());


MongoClient.connect(url, { useUnifiedTopology: true}, function(err, client) {

    if (err) {
        console.log(err);

        client.close();
    }

    console.log('Connected');

    const dbName = 'myproject';
    const db = client.db(dbName);

    var name = 'user' + Math.floor(Math.random() * 10000);
    var email = name + '@email.com';

    var collection = db.collection('customers');
    var doc = {name, email};

    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document inserted!');
    });

    var customers = db
        .collection('customers')
        .find()
        .toArray(function (err, docs) {
            console.log('Collection: ', docs);

            client.close();
        })
});