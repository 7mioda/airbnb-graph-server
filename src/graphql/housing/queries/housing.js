import airbnb from 'airbnbapijs';
import axios from "axios";

export const Query = `
    listing: [Housing]
    listingByLocation(location :String, offset: Int, limit: Int): [Housing]
    houseInfo(id : ID): HousingInfo
`;
export const Resolvers = {
    listing: async () => {
       try{
           const { search_results } =  await airbnb.listingSearch({
               limit: 12,
               location: 'France, Paris',
           });
        return search_results.map(({ listing, pricing_quote }) => ({ ...listing, pricing_quote }));
       }catch (e) {
           console.log(e)
       }
    },
    listingByLocation: async (__, { location = 'partout', min_bathrooms, guests, min_bedrooms, min_beds, price_min, price_max, offset, limit }) => {
        try{
            const { data: {search_results} } = await axios({
                method: 'get',
                url: 'https://api.airbnb.com/v2/search_results',
                params: {
                    api_key: 'd306zoyjsyarp7ifhu67rjxn52tv0t20',
                    locale: 'fr',
                    _limit: limit,
                    _offset: offset,
                    guests,
                    min_bathrooms,
                    min_bedrooms,
                    min_beds,
                    price_min,
                    price_max,
                    location,
                }
            });
            console.log(search_results);
            return search_results.map(({ listing, pricing_quote }) => ({ ...listing, pricing_quote }));
        }catch (e) {
            console.log(e)
        }
    },
    houseInfo: async (__, { id }) => {
        try{
            const { data: { listing } } = await axios({
                method: 'get',
                url: `https://api.airbnb.com/v1/listings/${id}?api_key=d306zoyjsyarp7ifhu67rjxn52tv0t20&locale=fr`
            });
            return listing;
        }catch (e) {
            console.log(e)

        }
    },
};
