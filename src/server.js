import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/createDynamicSchema';

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
