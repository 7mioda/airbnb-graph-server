import * as queries from './queries/user';
import * as mutations from './mutations/user';
import User from './types/user';

export const { Query } = queries;
export const Mutation = mutations.UserMutations;

export const Type = User;


export const Resolvers = {
    Query: queries.Resolvers,
    Mutation: mutations.Resolvers,
};
