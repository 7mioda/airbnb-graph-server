

const Pricing_quote = `
    type GuestDetails {
         localized_description: String
         number_of_adults: Int
         number_of_children: Int
         number_of_infants: Int
    }
    type PricingQuote {
       available: Boolean
       guests: Int
       guest_details: GuestDetails
       listing_currency: String
       localized_currency: String
       localized_nightly_price: Float
       localized_service_fee: Float
       localized_total_price: Float
       long_term_discount_amount_as_guest: Float
       nightly_price: Float
       service_fee: Float
       total_price: Float
    }  
`;

export default [Pricing_quote];
