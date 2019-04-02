import axios from "axios";
import airbnbapijs from 'airbnbapijs';

export const UserMutations = `
    login(username: String, password: String): String
    userInfo(token: String): UserInfo
`;


export const Resolvers = {
  login: async (__, { username, password }) => {
        try{
              const { login: { id: access_token } } = await axios({
                  method: 'POST',
                  url: 'https://api.airbnb.com/v2/logins',
                  params: {
                      api_key: 'd306zoyjsyarp7ifhu67rjxn52tv0t20',
                  },
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  data:{
                      email : username,
                      password
                  }
              });
              return access_token
        } catch (error) {
            const result = await airbnbapijs.login({ email: username, password });
            return result.login.id;
        }
  },
  userInfo: async (__, { token }) => {
      try {
                  const { data: { user: userInfo } }= await axios({
                  method: 'get',
                  url: 'https://api.airbnb.com/v2/users/me',
                  params: {
                      api_key: 'd306zoyjsyarp7ifhu67rjxn52tv0t20',
                  },
                  headers: {
                      'X-Airbnb-OAuth-Token': token,
                  }
          });

          return userInfo
      }catch(error){
          console.log(error);
          return null;
      }
  },
};
