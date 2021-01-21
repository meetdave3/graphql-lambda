import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './schemas';
import resolvers from './resolvers';

const NODE_ENV: string = process.env.NODE_ENV!;

const server = new ApolloServer({ typeDefs, resolvers, playground: {endpoint: `/${NODE_ENV}/graphql`}, introspection: true });

exports.graphqlHandler = server.createHandler();