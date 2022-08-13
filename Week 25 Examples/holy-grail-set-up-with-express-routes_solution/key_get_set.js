var redis = require('redis');
var client = redis.createClient();

client.connect();

client.on('connect', () => {
    console.log('connected');

    client
        .multi()
        .set('header', 0)
        .set('left', 0)
        .set('article', 0)
        .set('right', 0)
        .set('footer', 0)
        .exec();

    // client.mset("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);
    client.
        multi()
        .get('header')
        .get('left')
        .get('article')
        .get('right')
        .get('footer')
        .exec()
        .then(item => {
            console.log(item);
        })
});


