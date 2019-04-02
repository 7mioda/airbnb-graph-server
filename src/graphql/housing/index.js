import * as queries from './queries/housing';
import Housing from './types/housing';

export const { Query } = queries;

export const Type = Housing;


export const Resolvers = {
    Query: queries.Resolvers,
};
