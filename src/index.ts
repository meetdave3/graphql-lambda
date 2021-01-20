import { ApolloServer } from 'apollo-server'; 
import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: {url: string}) => console.log(`server started at ${url}`));