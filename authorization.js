export function authorization(email, password) {
    const userDataAuth = {
      login: `${email}`,
      password: `${password}`,
    };
    const url = 'https://immense-badlands-47107.herokuapp.com';
    const urlSignIn = "/auth/signIn";
    const urlVerifyToken = '/auth/verifyToken';
    function signIn() {
        fetch(url + urlSignIn, {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=utf-8" },
          body: JSON.stringify(userDataAuth),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.token) {
                return fetch(url + urlVerifyToken, {
                  method: "GET",
                  headers: { 
                    "Content-Type": "application/json;charset=utf-8", 
                    Authorization: data.token,
                 },
                })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
            }
            console.log(data);
            return true
          })
          .catch((error) => console.log(error));
    }
    signIn();
}