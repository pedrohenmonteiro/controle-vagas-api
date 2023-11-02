import { SignInProps } from "../components/FormSignIn";
import { SignUpProps } from "../components/FormSignUp";


const CLIENT_ID = "myclientid";
const CLIENT_SECRET = "myclientsecret";
const BASE_URL = "http://localhost:8080";
const TOKEN_URL = "/oauth2/token"
const USER_URL = "/usuarios"



const signUp = async (userValues: SignUpProps) => {
    const response = await fetch(BASE_URL + USER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userValues)
    });

    const data = await response.json();

    console.log(data)

    if (response.ok) {
        const signInProps: SignInProps = {
            username: userValues.email,
            password: userValues.senha
        };

        await login(signInProps);
    }
    return response.ok
}


const login = async (userValues: SignInProps) => {
    const response = await fetch(BASE_URL + TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
        body: `grant_type=password&username=${userValues.username}&password=${userValues.password}`,
      });

        const data = await response.json();
        console.log(data);

        if(data.access_token) {
            localStorage.setItem("access_token", data.access_token);
        }

        return response.ok;

    }

    const authService = {
        login,
        signUp
    };
    
    export default authService;