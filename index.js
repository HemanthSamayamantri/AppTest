var express = require('express');
var app = express();


// Set up templating
app.set('views', __dirname + '/views');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

// Serve static files
//app.use(express.static(__dirname + '/static'));


var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})