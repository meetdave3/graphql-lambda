import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "echo Hello"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: {url: string}) => console.log(`server started at ${url}`));