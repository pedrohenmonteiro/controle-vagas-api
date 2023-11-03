import Cookies from "js-cookie";

const CLIENT_ID = "front-server";
const CLIENT_SECRET = "front";
const BASE_URL = "http://localhost:8080";
const TOKEN_URL = "/oauth2/token"
const USER_URL = "/usuarios"
const REDIRECT_URI = 'http://localhost:5153/';
 
    type TokenProps = {
        access_token: string,
        expires_in: number
    }
 
   const retrieveToken = (code:string) => {
     let params = new URLSearchParams();   
     params.append('grant_type','authorization_code');
     params.append('redirect_uri', REDIRECT_URI);
     params.append('code',code);
 
     fetch('http://localhost:8080/oauth2/token', {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const token = data;
          saveToken(token);

          // Armazene o token de acesso de forma segura (por exemplo, em localStorage ou cookies)
        })
        .catch((error) => {
          console.error('Erro na troca de código por token:', error);
        });
   }
 
   const saveToken = (token: TokenProps) => {
     var expireDate = new Date().getTime() + (1000 * token.expires_in);
     Cookies.set("access_token", token.access_token, {expires: expireDate});
     console.log('Obtained Access token');
     window.location.href = 'http://localhost:5173';
   }
 
//    getResource(resourceUrl) : Observable<any>{
//      var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
//      return this._http.get(resourceUrl,{ headers: headers })
//                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
//    }
 
//    checkCredentials(){
//      return Cookie.check('access_token');
//    } 
 
//    logout() {
//      Cookie.delete('access_token');
//      window.location.reload();
//    }
//  }

    const authService = {
        retrieveToken
    };
    
    export default authService;