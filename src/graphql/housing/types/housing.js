

const Housing = `
    type Host {
        id: ID
        first_name:  String
        picture_url: String
        thumbnail_url: String
        has_profile_pic: Boolean
        created_at: String
        reviewee_count: Int
        recommendation_count: Int
        last_name: String
        thumbnail_medium_url: String
        picture_large_url: String
        response_time: String
        response_rate: String
        acceptance_rate: String
        wishlists_count: Int
        publicly_visible_wishlists_count: Int
        is_superhost: Boolean 
    }
    type HousingInfo {
        id: ID
        city: String
        thumbnail_url:  String
        medium_url: String
        user_id: Float
        picture_url: String
        xl_picture_url: String
        price: Float
        native_currency: String
        price_native: Float
        price_formatted: String
        lat: Float
        lng: Float
        country: String
        name: String
        smart_location: String
        has_double_blind_reviews: Boolean
        instant_bookable: Boolean
        bathrooms: Float
        bedrooms: Float
        beds: Float
        market: String
        min_nights: Int
        person_capacity: Int
        state: String
        zipcode: String
        user: [User],
        primary_host: Host
        address: String
        country_code: String
        cancellation_policy: String
        property_type: String
        reviews_count: Int
        room_type: String
        room_type_category: String
        picture_urls: [ String ]
        thumbnail_urls: [ String ],
        xl_picture_urls: [ String ],
        picture_count: Int
        currency_symbol_left: String
        picture_captions: [ String ],
        bed_type: String
        bed_type_category: String
        require_guest_profile_picture: Boolean
        require_guest_phone_verification: Boolean
        force_mobile_legal_modal: Boolean
        allowed_currencies: [ String ]
        cancel_policy: Int
        check_in_time: Int
        check_in_time_ends_at: Int
        check_out_time: Int
        guests_included: Int
        max_nights: Int
        square_feet: Float,
        locale: String
        has_viewed_terms: Boolean
        has_viewed_cleaning: Boolean
        has_agreed_to_legal_terms: Boolean
        has_viewed_ib_perf_dashboard_panel: Boolean
        localized_city: String
        language: String
        public_address: String
        map_image_url: String
        has_license: Boolean
        experiences_offered: String
        max_nights_input_value: Int
        min_nights_input_value: Int
        requires_license: Boolean
        property_type_id: Int
        house_rules: String
        cleaning_fee_native: Float
        extras_price_native: Float
        security_deposit_native: Float
        security_price_native: Float
        security_deposit_formatted: String
        description: String
        description_locale: String
        summary: String
        space: String
        access: String
        interaction: String
        neighborhood_overview: String
        notes: String
        transit: String
        amenities: [ String ]
        amenities_ids: [Int]
        is_location_exact: Boolean
        in_building: Boolean
        in_landlord_partnership: Boolean
        in_toto_area: Boolean
        calendar_updated_at: String
        cancel_policy_short_str: String
        star_rating: Float
        price_for_extra_person_native: Float
        weekly_price_native: Float
        time_zone_name: String
        weekly_price_factor: Float
        monthly_price_factor: Float
    }
    type Housing {
        bathrooms: Float
        bedrooms: Float
        beds: Float
        city: String
        id: ID
        instant_bookable: Boolean
        is_business_travel_ready: Boolean
        is_family_preferred: Boolean
        is_new_listing: Boolean
        lat: Float
        lng: Float
        localized_city: String
        name: String
        neighborhood: String
        person_capacity: Float
        picture_count: Float
        picture_url: String
        property_type_id: Float
        property_type: String
        public_address: String
        reviews_count: Float,
        room_type_category: String
        room_type: String
        scrim_color: String
        space_type: String
        star_rating: Float
        thumbnail_url: String
        user_id: Float
        xl_picture_url: String
        picture_urls: [ String ]
        xl_picture_urls: [ String ]
        pricing_quote: PricingQuote
        user: User
    }  
`;

export default [Housing ];
