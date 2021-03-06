const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.resolve(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('App now listening on port ' + PORT);
}); 