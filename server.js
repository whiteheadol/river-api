const express = require('express');
const app = express();


app.set('port', process.env.PORT || 3000);
app.locals.title = 'US Rivers';

app.get('/', (request, response) => {
  response.send('Oh hey River API');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
