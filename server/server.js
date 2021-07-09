const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'sdsdsa3123s4242343242',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app
  .route('/auth')
  .get((req, res) => {
    console.log(' req.session.username =>', req.session.username);
    res.json({ username: req.session.username });
  })
  .post((req, res) => {
    console.log(' BODY =>', req.body);
    const { username } = req.body;
    req.session.username = username;
    console.log(' req.session.username =>', req.session.username);
    res.json({ username });
  })
  .delete((req, res) => {
    req.session.destroy();
    res.json({ username: req.session?.username });
  });

app.get('/api', (req, res) => {
  res.json({ data: 'This is my Data!!!' });
});

app.listen(8080, () => {
  console.log('Server Started!!!');
});
