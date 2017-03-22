const { get } = require('https');
const { readFile } = require('fs');

// AJAX-like request
get('https://node-http.firebaseio.com/words.json', (res) => {
  let body = '';
  res.on('data', (buff) => {
    console.log("status?", res.statusCode);
    body += buff.toString()
  });
  res.on('end', () => {
    console.log(JSON.parse(body).slice(0, 10));
  });
});
