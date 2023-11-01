

const CLIENT_ID = "myclientid";
const CLIENT_SECRET = "myclientsecret";
const BASE_URL = "http://localhost:8080/";
const TOKEN_URL = "oauth2/token"



const login = async (email:string, password:string) => {
    const response = await fetch(BASE_URL + TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
        body: `grant_type=password&username=${email}&password=${password}`,
      });

        const data = await response.json();
        

        if(data.access_token) {
            localStorage.setItem("user", JSON.stringify(data));
        }

    }

    const authService = {
        login,
    };
    
    export default authService;