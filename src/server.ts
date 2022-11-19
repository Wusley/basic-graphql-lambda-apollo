import { ApolloServer } from '@apollo/server';

import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';


// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
    hey: String
    xp: String
    ho: String
  }
`;

function hey() {
    return 'you'
}

function char() {
    return 'to'
}

function ho() {
    return 'ho'
}

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
        hey,
        xp: char,
        ho: () => ho()
    },
};

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(server); 