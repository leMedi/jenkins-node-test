const app = require('./server.js');

//listen to port 3000 by default
const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log('Example app listening on port ' + PORT);
});