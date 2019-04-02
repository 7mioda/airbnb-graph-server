

const User = `
    type User {
        first_name: String
        has_profile_pic: Boolean
        id: ID
        picture_url: String
        smart_name: String
        thumbnail_url: String
        is_superhost: Boolean
    }  
    type UserInfo {
        about: String
        acceptance_rate: String
        bookings: Int
        created_at: String
        email: String
        first_name: String
        friends_count: Int
        has_available_payout_info: Boolean
        has_profile_pic: Boolean
        id: ID
        identity_verified: Boolean
        listings_count: Int
        picture_url: String
        recommendation_count: Float
        response_rate: String
        response_time: String
        reviewee_count: Int
        school: String
        thumbnail_medium_url: String
        thumbnail_url: String
        total_listings_count: Int
        trips: Int
    }
`;

export default [User];
