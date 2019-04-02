import * as queries from './queries/pricing_quote';
import PricingQuote from './types/pricing_quote';

export const { Query } = queries;

export const Type = PricingQuote;


export const Resolvers = {
    Query: queries.Resolvers,
};
