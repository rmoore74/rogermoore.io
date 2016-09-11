var path = require('path');

module.exports = function(app) {

    // before the SPA as blog will be own app
    // app.get('/blog', function(req, res) {
    //     res.send("this will be the blog");
    // });

    // everything here is main homepage (SPA)
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
    });
}
