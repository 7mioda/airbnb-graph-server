import { gql } from 'apollo-server';
import * as Housing from './housing';
import * as User from './user';
import * as PricingQuote from './PricingQuote';

const features = [
    Housing,
    User,
    PricingQuote
];
const stringDoers = field => features.reduce((acc, curr) => acc.concat(curr[field] || ''), '');

const resolversDoers = field => features.reduce((acc, curr) => Object.assign({}, acc, curr.Resolvers[field]), {});

const typeDefs = gql`    
    ${stringDoers('Type')}
    ${stringDoers('InputType')}
    type Query {
        ${stringDoers('Query')}
    }
    type Mutation {
        ${stringDoers('Mutation')}
    }
`;
const Query = resolversDoers('Query');
const Mutation = resolversDoers('Mutation');

const resolvers = Object.assign({}, { Query, Mutation  });
export {
    typeDefs,
    resolvers,
};
