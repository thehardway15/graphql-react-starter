import express from 'express';
import bodyParser from 'body-parser';
import { typeDefs, resolvers } from './schema';
import { ApolloServer } from 'apollo-server-express';



const app = express();
const port = process.env.PORT || 3000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


app.get('/', (req, res) => {
  res.send('Start to work!');
});

server.applyMiddleware({ app });

app.listen(port, () => console.log(`server is listening on ${port}`));
