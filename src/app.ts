import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Start to work!');
});

app.listen(port, () => console.log(`server is listening on ${port}`));
