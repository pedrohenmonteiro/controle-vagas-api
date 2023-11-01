

const CLIENT_ID = "myclientid";
const CLIENT_SECRET = "myclientsecret";



const login = async (email:string, password:string) => {
    const response = await fetch("http://localhost:8080/oauth2/token", {
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