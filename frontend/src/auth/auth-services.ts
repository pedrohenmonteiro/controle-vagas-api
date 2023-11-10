import Cookies from "js-cookie";

const CLIENT_ID = "client-server";
const CLIENT_SECRET = "client";
const BASE_URL = "http://localhost:8080";
const TOKEN_URL = "/oauth2/token"
const REDIRECT_URI = 'http://localhost:5173/auth/callback';
 
    type TokenProps = {
        access_token: string,
        expires_in: number
    }
 
   const retrieveToken = (code:string) => {
     let params = new URLSearchParams();   
     params.append('grant_type','authorization_code');
     params.append('redirect_uri', REDIRECT_URI);
     params.append('code',code);
 
     return fetch(BASE_URL + TOKEN_URL, {
        method: 'POST',
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
      })
        .then((response) => response.json())
        .then((token) => {
          console.log(token)
          saveToken(token);
        })
        .catch((error) => {
          console.error('Erro na troca de código por token:', error);
        });
   }
 
   const saveToken = (token: TokenProps) => {
     var expireDate = new Date().getTime() + (1000 * token.expires_in);
     Cookies.set("access_token", token.access_token, {expires: expireDate});
     console.log('Obtained Access token');
   }
 
    const getResource = async (resourceUrl:string) => {

      
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      }

      return fetch(resourceUrl, {
        method: "GET",
        headers: headers,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      });
    };
  
 
   const checkCredentials = () => {
     return !!Cookies.get('access_token');
   } 
 
   const logout = () => {
     Cookies.remove('access_token');
     window.location.reload();
   
 }

    const authService = {
        retrieveToken,
        getResource,
        checkCredentials,
        logout
    };
    
    export default authService;